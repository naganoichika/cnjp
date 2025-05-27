apt-get update && apt-get upgrade -y
apt-get install clang cmake build-essential pkg-config libssl-dev
apt-get install -y git wget curl
# Install Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/env

git clone -b <latest_tag> https://github.com/0glabs/0g-storage-node.git

cd 0g-storage-node

# Build in release mode
cargo build --release

