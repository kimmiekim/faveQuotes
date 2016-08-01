class ChangeColumnName < ActiveRecord::Migration
  def change
      rename_column :quotes, :write, :writer
  end
end
