class AddSketchIdToElements < ActiveRecord::Migration[6.0]
  def change
    add_column :elements, :sketch_id, :integer
  end
end
