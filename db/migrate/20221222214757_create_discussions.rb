class CreateDiscussions < ActiveRecord::Migration[7.0]
  def change
    create_table :discussions do |t|
      t.string :name_of_topic

      t.timestamps
    end
  end
end
