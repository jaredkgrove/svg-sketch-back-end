class CreateCircles < ActiveRecord::Migration[6.0]
  def change
    create_table :circles do |t|
      t.decimal :cx
      t.decimal :cy
      t.decimal :r
      t.string :stroke
      t.string :fill
      t.string :stroke_width
    end
  end
end
