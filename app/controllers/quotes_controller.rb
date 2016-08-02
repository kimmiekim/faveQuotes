class QuotesController < ApplicationController
  def index
    @quotes = Quote.all
    @quote = Quote.new
  end

  def create
    @quote = Quote.new(quote_params)
    respond_to do |format|
      if @quote.save
        format.html
        format.js{}
      else
        format.html
      end
    end
  end

  def destroy
    @quote.destroy
  end

  private
  def quote_params
    params.require(:quote).permit(:content)
  end
end
