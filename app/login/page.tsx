import LoginPage from '@/components/login/login-page';

const Page = async () => {
    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 sm:p-10">
            <div className="w-full max-w-sm">
                <LoginPage />
            </div>
        </div>
    );
};

export default Page;
