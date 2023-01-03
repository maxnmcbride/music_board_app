class DiscussionSerializer < ActiveModel::Serializer
    attributes :id, :name_of_topic
    has_many :comments
  end