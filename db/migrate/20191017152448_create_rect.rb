class CreateRect < ActiveRecord::Migration[6.0]
  def change
    create_table :rects do |t|
      t.decimal :x
      t.decimal :y
      t.decimal :rx
      t.decimal :ry
      t.decimal :width
      t.decimal :height
      t.string :stroke
      t.string :fill
      t.string :stroke_width
    end
  end
end
