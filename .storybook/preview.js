import { ConfigProvider } from "antd"

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview

export const decorators = [
  (Story) => (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#52c41a",
          colorInfo: "#52c41a",
        },
        components: {
          Button: {
            defaultActiveColor: "rgb(250,219,20)",
            colorPrimary: "rgb(250,84,28)",
          },
        },
      }}
    >
      <Story />
    </ConfigProvider>
  ),
]
