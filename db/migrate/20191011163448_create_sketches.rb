class CreateSketches < ActiveRecord::Migration[6.0]
  def change
    create_table :sketches do |t|

      t.timestamps
    end
  end
end
