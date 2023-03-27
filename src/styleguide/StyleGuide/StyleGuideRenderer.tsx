import ThemeProvider from "../../components/ThemeProvider/ThemeProvider";
import Layout from "../../components/Layouts/Layout/Layout";
import Flexible from "../../components/Layouts/Flexible/Flexible";
import NavigationDrawer from "../../components/Widgets/NavigationDrawer/NavigationDrawer";
import SurfaceLayout from "../../components/Layouts/SurfaceLayout/SurfaceLayout";
import {Label} from "../../components/Typography/Label/Label";

interface StyleGuideRendererProps {
    title: string;
    version?: string;
    children: any;
    toc?: React.ReactNode;
    hasSidebar?: boolean;
}

export default function StyleGuideRenderer(props: StyleGuideRendererProps) {
    const {
        title,
        version,
        children,
        toc,
        hasSidebar,
    } = props

    return <ThemeProvider>
        <Layout bg="var(--znui-background)" color="var(--znui-on-background)">
            <Flexible direction='row'>
                <Layout w={360}>
                    <div style={{
                        position: "fixed",
                        width: "inherit"
                    }}>
                        <NavigationDrawer style={{
                            height: "100vh",
                            overflow: 'auto',
                        }} h="100vh" pr={0} pt={0}>
                            <SurfaceLayout s={1} style={{
                                overflow: 'auto',
                            }} pr={12} pt={20}>
                                <img src="https://i.ibb.co/HXYdZgf/Type-Full.png" alt="Zation UI" style={{
                                    height: 50,
                                    marginBottom: 12
                                }}/>

                                {toc}
                            </SurfaceLayout>
                        </NavigationDrawer>
                    </div>
                </Layout>

                <Layout pl={20} style={{
                    flex: 1,
                }}>
                    {children}
                </Layout>
            </Flexible>
        </Layout>
    </ThemeProvider>
}