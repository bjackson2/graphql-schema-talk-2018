class GraphqlController < ActionController::Base
  skip_before_action :verify_authenticity_token

  def execute
    result = BackendSchema.execute(
      params[:query],
      variables: ensure_hash(params[:variables]),
      context: {},
      operation_name: params[:operationName]
    )
    render json: result
  end

  def schema
    render plain: GraphQL::Schema::Printer.new(BackendSchema).print_schema
  end

  private

  def ensure_hash(ambiguous_param)
    case ambiguous_param
    when String
      if ambiguous_param.present?
        ensure_hash(JSON.parse(ambiguous_param))
      else
        {}
      end
    when Hash, ActionController::Parameters
      ambiguous_param
    when nil
      {}
    else
      raise ArgumentError, "Unexpected parameter: #{ambiguous_param}"
    end
  end
end
