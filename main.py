import webapp2
import jinja2
import os

jinja = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__) + "/html"))

class HomePage(webapp2.RequestHandler):
    def get(self):
        template = jinja.get_template('home.html')
        self.response.write(template.render({}))

application = webapp2.WSGIApplication([
    ('/', HomePage)
], debug=True)
