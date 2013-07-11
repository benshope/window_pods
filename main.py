#!/usr/bin/env python

import os
import jinja2
import webapp2

jinja = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'])


class MainPage(webapp2.RequestHandler):

    def get(self):

        template_values = {}
        template = jinja.get_template('index.html')
        self.response.write(template.render(template_values))


application = webapp2.WSGIApplication([
    ('/', MainPage)
], debug=True)
