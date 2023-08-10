import { FC } from "react"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"
import SQLEditor from "./SQLEditor"

const App: FC = () => {
    return (
        <div
            style={{
                height: "100%",
                padding: "16px",
            }}
        >
            <PanelGroup direction="horizontal">
                <Panel defaultSize={15} minSize={15}>
                    <div style={{ height: "100%" }}>
                        <h3>Schema</h3>
                        <p>
                            Pretend that you have the following database schema:
                            <ul>
                                <li>public.users</li>
                                <ul>
                                    <li>name: TEXT</li>
                                    <li>email: TEXT</li>
                                </ul>
                                <li>test.hello</li>
                                <ul>
                                    <li>a: INT</li>
                                </ul>
                            </ul>
                        </p>
                    </div>
                </Panel>

                <PanelResizeHandle
                    style={{
                        backgroundColor: "#ccc",
                        height: "100%",
                        width: "8px",
                    }}
                />

                <Panel>
                    <PanelGroup direction="vertical">
                        <Panel>
                            <SQLEditor />
                        </Panel>

                        <PanelResizeHandle
                            style={{
                                backgroundColor: "#ccc",
                                height: "8px",
                                width: "100%",
                            }}
                        />

                        <Panel>
                            <div
                                style={{
                                    alignItems: "center",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    height: "100%",
                                }}
                            >
                                <h3>Welcome to Monaco SQL Web</h3>
                                <p>
                                    This tutorial demonstrates using SQL LSP in the browser with
                                    Monaco.
                                </p>
                            </div>
                        </Panel>
                    </PanelGroup>
                </Panel>
            </PanelGroup>
        </div>
    )
}
export default App
