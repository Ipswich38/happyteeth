import { useEffect, useState } from 'react';

export function useAutoUpdate(intervalMs: number = 30000, autoRefresh: boolean = true) {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [buildId, setBuildId] = useState<string | null>(null);

  useEffect(() => {
    const checkForUpdates = async () => {
      try {
        // Simple method: check if the page content has changed
        const response = await fetch('/_next/static/chunks/pages/_app.js', {
          method: 'HEAD',
          cache: 'no-cache'
        });

        const currentBuildId = response.headers.get('etag') || response.headers.get('last-modified') || Date.now().toString();

        if (buildId === null) {
          // First load - store the build ID
          setBuildId(currentBuildId);
        } else if (buildId !== currentBuildId) {
          // Build has changed
          setUpdateAvailable(true);

          if (autoRefresh) {
            // Auto-refresh after 2 seconds to give user time to see notification
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          }
        }
      } catch (error) {
        // Fallback: check page itself
        try {
          const pageResponse = await fetch(window.location.pathname, {
            method: 'HEAD',
            cache: 'no-cache'
          });

          const currentPageId = pageResponse.headers.get('etag') || pageResponse.headers.get('last-modified');
          const storedPageId = sessionStorage.getItem('page-id');

          if (!storedPageId) {
            sessionStorage.setItem('page-id', currentPageId || '');
          } else if (storedPageId !== currentPageId) {
            setUpdateAvailable(true);
            if (autoRefresh) {
              setTimeout(() => {
                sessionStorage.setItem('page-id', currentPageId || '');
                window.location.reload();
              }, 2000);
            }
          }
        } catch (fallbackError) {
          console.debug('Update check failed:', fallbackError);
        }
      }
    };

    // Check immediately after a delay to avoid conflicts with initial page load
    setTimeout(checkForUpdates, 5000);

    // Set up interval
    const interval = setInterval(checkForUpdates, intervalMs);

    return () => clearInterval(interval);
  }, [intervalMs, buildId, autoRefresh]);

  const applyUpdate = () => {
    sessionStorage.removeItem('page-id');
    window.location.reload();
  };

  return { updateAvailable, applyUpdate };
}