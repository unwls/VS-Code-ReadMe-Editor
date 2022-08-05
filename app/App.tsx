import React, { useEffect } from "react";

import useAppStore from "./stores/useAppStore";

import Navbar from "./components/navbar";
import ComponentsDrawer from "./components/ComponentsDrawer";
import MarkdownEditor from "./components/MarkdownEditor";
import MarkdownPreview from "./components/MarkdownPreview";

const App = () => {   

  const resetEditorContent = useAppStore((state) => state.resetEditorContent);

  return (
    <div className="container-fluid px-0">
      <Navbar />

      <ComponentsDrawer  />

      <div className="mx-4 d-flex justify-content-around pt-4" >
        <div>
          <div className="d-flex justify-content-between">
            <p className="mx-2 text-primary"><strong>Editor</strong></p>
            <span onClick={() => resetEditorContent()} >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-clockwise text-muted pointer" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
              </svg>
            </span>
          </div>
          <MarkdownEditor />
        </div>

        <div>
          <p className="mx-2 text-primary"><strong>Preview</strong></p> 
          <MarkdownPreview />
        </div>
      </div>

      </div>
  );
};

export default App;


//IyBXZWxjb21lIHRvIHlvdXIgVlMgQ29kZSBFeHRlbnNpb24KCiMjIFdoYXQncyBpbiB0aGUgZm9sZGVyCgoqIFRoaXMgZm9sZGVyIGNvbnRhaW5zIGFsbCBvZiB0aGUgZmlsZXMgbmVjZXNzYXJ5IGZvciB5b3VyIGV4dGVuc2lvbi4KKiBgcGFja2FnZS5qc29uYCAtIHRoaXMgaXMgdGhlIG1hbmlmZXN0IGZpbGUgaW4gd2hpY2ggeW91IGRlY2xhcmUgeW91ciBleHRlbnNpb24gYW5kIGNvbW1hbmQuCiAgKiBUaGUgc2FtcGxlIHBsdWdpbiByZWdpc3RlcnMgYSBjb21tYW5kIGFuZCBkZWZpbmVzIGl0cyB0aXRsZSBhbmQgY29tbWFuZCBuYW1lLiBXaXRoIHRoaXMgaW5mb3JtYXRpb24gVlMgQ29kZSBjYW4gc2hvdyB0aGUgY29tbWFuZCBpbiB0aGUgY29tbWFuZCBwYWxldHRlLiBJdCBkb2VzbuKAmXQgeWV0IG5lZWQgdG8gbG9hZCB0aGUgcGx1Z2luLgoqIGBzcmMvZXh0ZW5zaW9uLnRzYCAtIHRoaXMgaXMgdGhlIG1haW4gZmlsZSB3aGVyZSB5b3Ugd2lsbCBwcm92aWRlIHRoZSBpbXBsZW1lbnRhdGlvbiBvZiB5b3VyIGNvbW1hbmQuCiAgKiBUaGUgZmlsZSBleHBvcnRzIG9uZSBmdW5jdGlvbiwgYGFjdGl2YXRlYCwgd2hpY2ggaXMgY2FsbGVkIHRoZSB2ZXJ5IGZpcnN0IHRpbWUgeW91ciBleHRlbnNpb24gaXMgYWN0aXZhdGVkIChpbiB0aGlzIGNhc2UgYnkgZXhlY3V0aW5nIHRoZSBjb21tYW5kKS4gSW5zaWRlIHRoZSBgYWN0aXZhdGVgIGZ1bmN0aW9uIHdlIGNhbGwgYHJlZ2lzdGVyQ29tbWFuZGAuCiAgKiBXZSBwYXNzIHRoZSBmdW5jdGlvbiBjb250YWluaW5nIHRoZSBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgY29tbWFuZCBhcyB0aGUgc2Vjb25kIHBhcmFtZXRlciB0byBgcmVnaXN0ZXJDb21tYW5kYC4KCiMjIEdldCB1cCBhbmQgcnVubmluZyBzdHJhaWdodCBhd2F5CgoqIFByZXNzIGBGNWAgdG8gb3BlbiBhIG5ldyB3aW5kb3cgd2l0aCB5b3VyIGV4dGVuc2lvbiBsb2FkZWQuCiogUnVuIHlvdXIgY29tbWFuZCBmcm9tIHRoZSBjb21tYW5kIHBhbGV0dGUgYnkgcHJlc3NpbmcgKGBDdHJsK1NoaWZ0K1BgIG9yIGBDbWQrU2hpZnQrUGAgb24gTWFjKSBhbmQgdHlwaW5nIGBIZWxsbyBXb3JsZGAuCiogU2V0IGJyZWFrcG9pbnRzIGluIHlvdXIgY29kZSBpbnNpZGUgYHNyYy9leHRlbnNpb24udHNgIHRvIGRlYnVnIHlvdXIgZXh0ZW5zaW9uLgoqIEZpbmQgb3V0cHV0IGZyb20geW91ciBleHRlbnNpb24gaW4gdGhlIGRlYnVnIGNvbnNvbGUuCgojIyBNYWtlIGNoYW5nZXMKCiogWW91IGNhbiByZWxhdW5jaCB0aGUgZXh0ZW5zaW9uIGZyb20gdGhlIGRlYnVnIHRvb2xiYXIgYWZ0ZXIgY2hhbmdpbmcgY29kZSBpbiBgc3JjL2V4dGVuc2lvbi50c2AuCiogWW91IGNhbiBhbHNvIHJlbG9hZCAoYEN0cmwrUmAgb3IgYENtZCtSYCBvbiBNYWMpIHRoZSBWUyBDb2RlIHdpbmRvdyB3aXRoIHlvdXIgZXh0ZW5zaW9uIHRvIGxvYWQgeW91ciBjaGFuZ2VzLgoKCiMjIEV4cGxvcmUgdGhlIEFQSQoKKiBZb3UgY2FuIG9wZW4gdGhlIGZ1bGwgc2V0IG9mIG91ciBBUEkgd2hlbiB5b3Ugb3BlbiB0aGUgZmlsZSBgbm9kZV9tb2R1bGVzL0B0eXBlcy92c2NvZGUvaW5kZXguZC50c2AuCgojIyBSdW4gdGVzdHMKCiogT3BlbiB0aGUgZGVidWcgdmlld2xldCAoYEN0cmwrU2hpZnQrRGAgb3IgYENtZCtTaGlmdCtEYCBvbiBNYWMpIGFuZCBmcm9tIHRoZSBsYXVuY2ggY29uZmlndXJhdGlvbiBkcm9wZG93biBwaWNrIGBFeHRlbnNpb24gVGVzdHNgLgoqIFByZXNzIGBGNWAgdG8gcnVuIHRoZSB0ZXN0cyBpbiBhIG5ldyB3aW5kb3cgd2l0aCB5b3VyIGV4dGVuc2lvbiBsb2FkZWQuCiogU2VlIHRoZSBvdXRwdXQgb2YgdGhlIHRlc3QgcmVzdWx0IGluIHRoZSBkZWJ1ZyBjb25zb2xlLgoqIE1ha2UgY2hhbmdlcyB0byBgc3JjL3Rlc3Qvc3VpdGUvZXh0ZW5zaW9uLnRlc3QudHNgIG9yIGNyZWF0ZSBuZXcgdGVzdCBmaWxlcyBpbnNpZGUgdGhlIGB0ZXN0L3N1aXRlYCBmb2xkZXIuCiAgKiBUaGUgcHJvdmlkZWQgdGVzdCBydW5uZXIgd2lsbCBvbmx5IGNvbnNpZGVyIGZpbGVzIG1hdGNoaW5nIHRoZSBuYW1lIHBhdHRlcm4gYCoqLnRlc3QudHNgLgogICogWW91IGNhbiBjcmVhdGUgZm9sZGVycyBpbnNpZGUgdGhlIGB0ZXN0YCBmb2xkZXIgdG8gc3RydWN0dXJlIHlvdXIgdGVzdHMgYW55IHdheSB5b3Ugd2FudC4KCiMjIEdvIGZ1cnRoZXIKCiAqIFJlZHVjZSB0aGUgZXh0ZW5zaW9uIHNpemUgYW5kIGltcHJvdmUgdGhlIHN0YXJ0dXAgdGltZSBieSBbYnVuZGxpbmcgeW91ciBleHRlbnNpb25dKGh0dHBzOi8vY29kZS52aXN1YWxzdHVkaW8uY29tL2FwaS93b3JraW5nLXdpdGgtZXh0ZW5zaW9ucy9idW5kbGluZy1leHRlbnNpb24pLgogKiBbUHVibGlzaCB5b3VyIGV4dGVuc2lvbl0oaHR0cHM6Ly9jb2RlLnZpc3VhbHN0dWRpby5jb20vYXBpL3dvcmtpbmctd2l0aC1leHRlbnNpb25zL3B1Ymxpc2hpbmctZXh0ZW5zaW9uKSBvbiB0aGUgVlNDb2RlIGV4dGVuc2lvbiBtYXJrZXRwbGFjZS4KICogQXV0b21hdGUgYnVpbGRzIGJ5IHNldHRpbmcgdXAgW0NvbnRpbnVvdXMgSW50ZWdyYXRpb25dKGh0dHBzOi8vY29kZS52aXN1YWxzdHVkaW8uY29tL2FwaS93b3JraW5nLXdpdGgtZXh0ZW5zaW9ucy9jb250aW51b3VzLWludGVncmF0aW9uKS4K