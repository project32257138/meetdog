import { useEffect } from 'react';

const useScript = url => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    // otherwise script is added at each reload
    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

export default useScript;