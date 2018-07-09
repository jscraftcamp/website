with import (fetchTarball https://github.com/nixos/nixpkgs/tarball/6db7f92cc2af827e8b8b181bf5ed828a1d0f141d) { };

stdenv.mkDerivation {
    name = "dev-shell";
    src = null;
    buildInputs = [ nodejs-9_x ];
}
