from flask import Flask, render_template

# initializes the server as this python file with templates folder in the app root directory
app = Flask(__name__)


# The decorator @app.route binds a URL to a function as such.
# Whenever the URL /calculator is loaded on localhost:5000, this method will be run

# Reroute no URL to home-one
@app.route('/')
def no_url():
    return render_template('home-one.html')


@app.route('/about.html')
def about():
    return render_template('about.html')


@app.route('/affiliate.html')
def affiliate():
    return render_template('affiliate.html')


@app.route('/all.html')
def all():
    return render_template('all.html')


@app.route('/all-lottery-one.html')
def all_lottery_one():
    return render_template('all-lottery-one.html')


@app.route('/all-lottery-two.html')
def all_lottery_two():
    return render_template('all-lottery-two.html')


@app.route('/all-lottery-three.html')
def all_lottery_three():
    return render_template('all-lottery-three.html')


@app.route('/blog-details.html')
def blog_details():
    return render_template('blog-details.html')


@app.route('/blog-four.html')
def blog_four():
    return render_template('blog-four.html')


@app.route('/blog-three.html')
def blog_three():
    return render_template('blog-three.html')


@app.route('/blog-two.html')
def blog_two():
    return render_template('blog-two.html')


@app.route('/calculator.html')
def calculator():
    return render_template('calculator.html')


@app.route('/contact.html')
def contact():
    return render_template('contact.html')


@app.route('/error-404.html')
def error_404():
    return render_template('error-404.html')


@app.route('/faq.html')
def faq():
    return render_template('faq.html')


@app.route('/home-one.html')
def home_one():
    return render_template('home-one.html')


@app.route('/home-two.html')
def home_two():
    return render_template('home-two.html')


@app.route('/how-to-play.html')
def how_to_play():
    return render_template('how-to-play.html')


@app.route('/index.html')
def index():
    return render_template('index.html')


@app.route('/latest-winner.html')
def latest_winner():
    return render_template('latest-winner.html')


# @app.errorhandler(404)
# def page_not_found(e):
#     return render_template('error-404.html')

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


'''from flask import Flask, render_template, request\

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

@app.route('/calculatorresult', methods=['POST', 'GET'])
def calculator_result():
    if request.method == 'POST':
        result = request.form
        return render_template("calculator-result.html", result=result)


# These lines run the app. Optional parameters are listed on https://www.tutorialspoint.com/flask/flask_quick_guide.htm
# For right now, it runs on localhost:5000.
if __name__ == '__main__':
    app.run(debug=True)
'''