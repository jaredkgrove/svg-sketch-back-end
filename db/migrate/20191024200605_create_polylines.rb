class CreatePolylines < ActiveRecord::Migration[6.0]
  def change
    create_table :polylines do |t|
      t.string :points
      t.string :stroke
      t.string :stroke_width
    end
  end
end
# <polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
# stroke="orange" fill="transparent" stroke-width="5"/>
#