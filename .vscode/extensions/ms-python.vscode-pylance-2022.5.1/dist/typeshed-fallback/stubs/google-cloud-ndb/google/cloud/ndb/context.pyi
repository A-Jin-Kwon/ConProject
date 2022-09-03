from collections.abc import Callable
from typing import Any, NamedTuple

from google.cloud.ndb import Key, exceptions as exceptions

class _LocalState:
    def __init__(self) -> None: ...
    @property
    def context(self): ...
    @context.setter
    def context(self, value) -> None: ...
    @property
    def toplevel_context(self): ...
    @toplevel_context.setter
    def toplevel_context(self, value) -> None: ...

def get_context(raise_context_error: bool = ...): ...
def get_toplevel_context(raise_context_error: bool = ...): ...

class _ContextTuple(NamedTuple):
    id: Any
    client: Any
    namespace: Any
    eventloop: Any
    batches: Any
    commit_batches: Any
    transaction: Any
    cache: Any
    global_cache: Any
    on_commit_callbacks: Any
    transaction_complete_callbacks: Any
    legacy_data: Any

class _Context(_ContextTuple):
    def __new__(
        cls,
        client,
        id: Any | None = ...,
        namespace=...,
        eventloop: Any | None = ...,
        batches: Any | None = ...,
        commit_batches: Any | None = ...,
        transaction: Any | None = ...,
        cache: Any | None = ...,
        cache_policy: Any | None = ...,
        global_cache: Any | None = ...,
        global_cache_policy: Callable[[Key], bool] | None = ...,
        global_cache_timeout_policy: Any | None = ...,
        datastore_policy: Any | None = ...,
        on_commit_callbacks: Any | None = ...,
        transaction_complete_callbacks: Any | None = ...,
        legacy_data: bool = ...,
        retry: Any | None = ...,
        rpc_time: Any | None = ...,
        wait_time: Any | None = ...,
    ): ...
    def new(self, **kwargs): ...
    rpc_time: int
    wait_time: int
    def use(self) -> None: ...

class Context(_Context):
    def clear_cache(self) -> None: ...
    def flush(self) -> None: ...
    def get_namespace(self): ...
    def get_cache_policy(self): ...
    def get_datastore_policy(self) -> None: ...
    def get_global_cache_policy(self): ...
    get_memcache_policy: Any
    def get_global_cache_timeout_policy(self): ...
    get_memcache_timeout_policy: Any
    cache_policy: Any
    def set_cache_policy(self, policy): ...
    datastore_policy: Any
    def set_datastore_policy(self, policy): ...
    global_cache_policy: Any
    def set_global_cache_policy(self, policy): ...
    set_memcache_policy: Any
    global_cache_timeout_policy: Any
    def set_global_cache_timeout_policy(self, policy): ...
    set_memcache_timeout_policy: Any
    def get_retry_state(self): ...
    def set_retry_state(self, state) -> None: ...
    def clear_retry_state(self) -> None: ...
    def call_on_commit(self, callback) -> None: ...
    def in_transaction(self): ...
    def in_retry(self): ...
    def memcache_add(self, *args, **kwargs) -> None: ...
    def memcache_cas(self, *args, **kwargs) -> None: ...
    def memcache_decr(self, *args, **kwargs) -> None: ...
    def memcache_delete(self, *args, **kwargs) -> None: ...
    def memcache_get(self, *args, **kwargs) -> None: ...
    def memcache_gets(self, *args, **kwargs) -> None: ...
    def memcache_incr(self, *args, **kwargs) -> None: ...
    def memcache_replace(self, *args, **kwargs) -> None: ...
    def memcache_set(self, *args, **kwargs) -> None: ...
    def urlfetch(self, *args, **kwargs) -> None: ...

class ContextOptions:
    def __init__(self, *args, **kwargs) -> None: ...

class TransactionOptions:
    NESTED: int
    MANDATORY: int
    ALLOWED: int
    INDEPENDENT: int

class AutoBatcher:
    def __init__(self, *args, **kwargs) -> None: ...
