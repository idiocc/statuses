### status[code]

Map of `code` to `status message`. Returns `undefined` for invalid codes.

<table>
<tr><th><a href="example/code.js">Source</a></th><th>Output</th></tr>
<!-- block-start -->
<tr><td>

%EXAMPLE: example/code, ../src => @goa/statuses%
</td>
<td>

%FORK-js example/code%
</td></tr>
</table>

### status[message]

Map of `status message` to `code`. `msg` can either be title-cased or lower-cased. Returns `undefined` for invalid status messages.

<table>
<tr><th><a href="example/message.js">Source</a></th><th>Output</th></tr>
<!-- block-start -->
<tr><td>

%EXAMPLE: example/message, ../src => @goa/statuses%
</td>
<td>

%FORK-js example/message%
</td></tr>
</table>

### redirect[code]

Returns `true` if a status code is a valid redirect status.

<table>
<tr><th><a href="example/redirect.js">Source</a></th><th>Output</th></tr>
<!-- block-start -->
<tr><td>

%EXAMPLE: example/redirect, ../src => @goa/statuses%
</td>
<td>

%FORK-js example/redirect%
</td></tr>
</table>

### empty[code]

Returns `true` if a status code expects an empty body.

<table>
<tr><th><a href="example/empty.js">Source</a></th><th>Output</th></tr>
<!-- block-start -->
<tr><td>

%EXAMPLE: example/empty, ../src => @goa/statuses%
</td>
<td>

%FORK-js example/empty%
</td></tr>
</table>

### retry[code]

Returns `true` if you should retry the rest.

<table>
<tr><th><a href="example/retry.js">Source</a></th><th>Output</th></tr>
<!-- block-start -->
<tr><td>

%EXAMPLE: example/retry, ../src => @goa/statuses%
</td>
<td>

%FORK-js example/retry%
</td></tr>
</table>

%~%