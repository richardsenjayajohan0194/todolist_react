import { toast } from 'react-toastify';

const UseToast = () => {
    const usetoast = () => {
        const myPromise = new Promise<{ name: string }>((resolve) => {
            setTimeout(() => {
                resolve({ name: 'My toast' });
            }, 3000);
        });

        
        toast.promise(myPromise, {
            pending: 'Loading...',
            success: {
                render({ data }) {
                    return (
                        <div>
                            <div className="fs-6">{data.name} toast has been added</div>
                            <small>Custom description for the success state</small>
                        </div>
                    );
                },
                className: 'toast-success',
            },
           error: 'Error',
        });
    };

    return { usetoast };
}

export default UseToast;
