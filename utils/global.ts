import { useEffect } from "react";

export const separateSnakeCaseString = (text: string): string =>
	text.split("_").join(" ");

export const useOutsideAlerter = (ref: any, callback: any) => {
	useEffect(() => {
		/**
		 * Alert if clicked on outside of element
		 */
		function handleClickOutside(event: any) {
			if (ref.current && !ref.current.contains(event.target)) {
				callback();
			}
		}
		// Bind the event listener
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", handleClickOutside);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ref]);
};

/**
 * @param objectArray an array containing the objects to be grouped
 * @param property the key in the object that would be used for separation
 * @returns {Object} an object containing the grouped arrays.
 */
export const groupObjectBy = (
	objectArray: Array<any>,
	property: string,
	matcher?: Function,
): Object => {
	return objectArray.reduce((acc, obj) => {
		let key = obj[property];

		if (matcher) {
			key = matcher(key);
		}

		// checks if the value has not been assigned a group.
		if (!acc[key]) {
			acc[key] = [];
		}

		// Add object to list for given key's value
		acc[key].push(obj);
		return acc;
	}, {});
};

export const checkYtLink = (link: string) => {
	return link.includes("youtube.com");
};

export const getPromotionFee = (show: any, fee: string) => {
	const date = new Date(),
		currDay = date.getDay(),
		promoPeriod = Number(show?.promo_period || 7),
		numeralizedFee = Number(fee);

	return (Math.abs(promoPeriod - currDay) * numeralizedFee).toFixed(2);
};

export const getIsValidPromotionDay = (show: any) => {
	const date = new Date(),
		currDay = date.getDay(),
		promoPeriod = Number(show?.promo_period || 7),
		endDay = promoPeriod == 7 ? 0 : promoPeriod;

	// if (promoPeriod == 7) {
	//    promoPeriod=0
	//  }

	if (endDay != 0) {
		return currDay <= endDay;
	} else {
		return currDay > 0;
	}

	//||
	// (currDay == 0 && endDay == 0) ? false : true;
	//  return currDay < endDay;
};

export const removeItemDuplicates = (arr: Array<any>) => {
	const unique = arr
		?.map((e: any) => e.name)
		// store the keys of the unique objects
		?.map((e: any, i: any, final: any) => final.indexOf(e) === i && i)
		// eliminate the dead keys & store unique objects
		?.filter((e: any) => arr[e])
		?.map((e: any) => arr[e]);
	return unique;
};

export const getSelectedItemFullDetails = (listArg: any, arg1: any, arg2: any) => {
	const list = listArg?.filter((item: any) => item[arg1] == arg2);
	return list?.[0];
}