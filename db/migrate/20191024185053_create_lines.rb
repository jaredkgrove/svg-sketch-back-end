class CreateLines < ActiveRecord::Migration[6.0]
  def change
    create_table :lines do |t|
      t.decimal :x1
      t.decimal :y1
      t.decimal :x2
      t.decimal :y2
      t.string :stroke
      t.string :stroke_width
    end
  end
end
