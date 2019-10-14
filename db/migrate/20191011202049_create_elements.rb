class CreateElements < ActiveRecord::Migration[6.0]
  def change
    create_table :elements do |t|
      t.string :type, null: false
      t.string :properties, default: '{}'  
      t.timestamps
    end
  end
end
