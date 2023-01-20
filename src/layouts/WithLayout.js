export default function WithLayout({
  component: Component,
  layout: Layout,
  requireSession = false,
  layoutData,
  data,
  ...rest
}) {
  return (
    <Layout data={layoutData}>
        <Component {...rest} data={data} />
    </Layout>
  );
}
