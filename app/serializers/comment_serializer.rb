class CommentSerializer < ActiveModel::Serializer
    attributes :id, :post, :user
    has_one :user
    has_one :discussion
  end