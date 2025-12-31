# :material-download: Installation

## pip (Recommended)

```bash
pip install pgsync
```

??? tip "Using a virtual environment"
    ```bash
    python3 -m venv venv
    source venv/bin/activate  # Linux/macOS
    # or: venv\Scripts\activate  # Windows
    pip install pgsync
    ```

---

## uv

Fast installation with [uv](https://github.com/astral-sh/uv):

```bash
uv tool install pgsync
```

Or within a project:

```bash
uv add pgsync
```

---

## pipx

Install in an isolated environment:

```bash
pipx install pgsync
```

---

## Docker

Pull the official image:

```bash
docker pull toluaina1/pgsync:latest
```

See [Docker setup](docker.md) for running with Docker.

---

## From Source

```bash
git clone https://github.com/toluaina/pgsync.git
cd pgsync
pip install -e .
```

---

## Verify Installation

```bash
pgsync --version
```

You should see the version number printed.

!!! success "Next Steps"
    Once installed, proceed to [Setup](setup.md) to configure your database.
