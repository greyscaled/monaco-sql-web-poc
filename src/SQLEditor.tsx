import Editor, { BeforeMount, OnMount } from "@monaco-editor/react"
import { FC } from "react"

const SQLEditor: FC = () => {
    const beforeMount: BeforeMount = (monaco) => {
        console.debug("beforeMount")
    }

    const onMount: OnMount = (_, monaco) => {
        console.debug("onMount")

        document.fonts.ready
            .then(() => {
                console.debug("remeasureFonts")
                monaco.editor.remeasureFonts()
            })
            .catch((err) => {
                console.error("remeasureFonts", err)
            })
    }

    return (
        <Editor
            beforeMount={beforeMount}
            language="sql"
            onMount={onMount}
            options={{
                minimap: {
                    enabled: false,
                },
            }}
        />
    )
}
export default SQLEditor
