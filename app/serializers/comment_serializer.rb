class CommentSerializer < ActiveModel::Serializer
    attributes :id,
    has_one :user
    has_one :discussion
  end