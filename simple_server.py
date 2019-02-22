#! python
#
# A simple command to run an HTTP server with python
from http.server import HTTPServer
from http.server import BaseHTTPRequestHandler


# This class is the server and inherits as shown below from the imports
class Serv(BaseHTTPRequestHandler):

    # do_GET method is built into BaseHTTPRequestHandler and runs when the
    # server receives a GET request
    def do_GET(self):
        # Check the path of the request - / is will get the index page
        if self.path == '/':
            self.path = '/index.html'
        try:
            file_to_open = open(self.path[1:]).read()
            self.send_response(200)
        except Exception as e:
            file_to_open = "File not found\n{}".format(e)
            self.send_response(404)
        self.end_headers()
        self.wfile.write(bytes(file_to_open, 'utf-8'))


httpd = HTTPServer(('localhost', 8080), Serv)
print("[+] Server running on -> http://127.0.0.1:8080/")
httpd.serve_forever()
