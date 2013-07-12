import webapp2
import jinja2
import os

jinja = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__) + "/html"))

class Home(webapp2.RequestHandler):
    def get(self):
        template = jinja.get_template('home.html')
        self.response.write(template.render({}))

class Blog(webapp2.RequestHandler):
    def get(self):
        template = jinja.get_template('blog.html')
        self.response.write(template.render({}))

class Post(webapp2.RequestHandler):
    def get(self):
        template = jinja.get_template('post.html')
        self.response.write(template.render({}))

app = webapp2.WSGIApplication([
    ('/', Home),
    ('/blog', Blog),
    ('/post', Post)
], debug=True)
