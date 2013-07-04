from fabric.api import local

def run(mode="normal"):
    """ start the local app server """
    local("dev_appserver.py .")

def save(m="Fab-update the app"):
    """ save the to github """
    local("git add .")
    local("git commit -a -m '{0}'".format(m))
    local("git push")

def update(app_id="healthy-planet", version="2-2"):
    """ upload the app """
    local("appcfg.py --oauth2 update .")