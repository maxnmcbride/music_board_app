class UserSerializer < ActiveModel::Serializer
    attributes :id, :username, :specialty
end