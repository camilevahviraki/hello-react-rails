class GreetingSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :message
end
