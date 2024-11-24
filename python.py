import socket

def start_server():
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server_host = "127.0.0.1"
    server_port = 5000
    server_socket.bind((server_host, server_port))
    server_socket.listen(5)
    print(f"Server started. Listening on {server_host}:{server_port}...")
    while True:
        client_socket, client_address = server_socket.accept()
        print(f"Client connected: {client_address}")
        data = client_socket.recv(1024).decode()
        print(f"Received from client: {data}")
        response = "Message received!"
        client_socket.send(response.encode())
        client_socket.close()

if __name__ == "__main__":
    start_server()
