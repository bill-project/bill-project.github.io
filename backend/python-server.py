from flask import Flask, render_template, request\

# initializes the server as this python file with templates folder in the app root directory
app = Flask(__name__, template_folder='..')

# The decorator @app.route binds a URL to a function as such.
# Whenever the URL /calculator is loaded on localhost:5000, this method will be run
@app.route('/calculator')
def calculator():
    return render_template('calculator.html')

# This segment could be used to render the calculator result if the calculator.html sends a post request
# to the URL /calculatorresult. Unsure if this is the approach you want to take, but if it is, here's an idea.
# Update: it looks like you set up something on calculator#0? Maybe something similar could be used here? I'm not
# very familiar with HTML.
'''
@app.route('/calculatorresult', methods=['POST', 'GET'])
def calculator_result():
    if request.method == 'POST':
        result = request.form
        return render_template("calculator-result.html", result=result)
'''

# These lines run the app. Optional parameters are listed on https://www.tutorialspoint.com/flask/flask_quick_guide.htm
# For right now, it runs on localhost:5000.
if __name__ == '__main__':
    app.run(debug=True)
