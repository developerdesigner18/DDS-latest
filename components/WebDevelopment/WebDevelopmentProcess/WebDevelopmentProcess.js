import { useTheme } from "next-themes";

const WebDevelopmentProcess = () => {
    const { theme, setTheme } = useTheme();

    return (
        <>
            <div className="process-container">
                <div className="webdevelopment-process text-center pt-50 pb-50">
                    <h2>Web Development Process</h2>
                    <p className="process-paragraph">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </p>
                </div>
                <div className="process-image-holder">
                    {theme == "light" && (
                        <img
                            src="/images/web-development/webProcess.png"
                            alt="image"
                        />
                    )}
                    {theme == "dark" && (
                        <img
                            src="/images/web-development/webProcess-dark.png"
                            alt="image"
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default WebDevelopmentProcess;
