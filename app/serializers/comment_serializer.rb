class CommentSerializer < ActiveModel::Serializer
    attributes :id, :post
    has_one :user
    has_one :discussion
  end