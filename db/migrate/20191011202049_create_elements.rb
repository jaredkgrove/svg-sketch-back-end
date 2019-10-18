class CreateElements < ActiveRecord::Migration[6.0]
  def change
    create_table :elements do |t|
      t.integer :sketch_id
      t.references :elementable, polymorphic: true
      t.timestamps
    end
  end
end
