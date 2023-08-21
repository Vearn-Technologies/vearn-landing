import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const useReferral = () => {
	const router = useRouter();

	// Referral
	const [ref, setRef] = useState<string | null>(null);

	useEffect(() => {
		// Get the query parameter from the URL
		const refId = router.query.refId;

		// Check if it's the first mount
		const isFirstMount = localStorage.getItem("isFirstMount") === null;

		if (isFirstMount && refId) {
			// Save the query parameter to localStorage
			localStorage.setItem("refId", refId as any);

			// Clear the query parameter from the URL
			const { pathname, query } = router;
			delete query.refId;

			// Replace the URL without preserving the browser history
			router.replace({ pathname, query }, undefined, { shallow: true });

			// Set isFirstMount to false in localStorage
			localStorage.setItem("isFirstMount", "false");
		}

		// Retrieve the saved query parameter from localStorage
		const savedRef = localStorage.getItem("refId");
		setRef(savedRef);
	}, [router]);

	const clear = () => {
		localStorage.removeItem("refId");
		localStorage.removeItem("isFirstMount");
	};

	return { ref, clear };
};

export default useReferral;
