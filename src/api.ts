import axios from "axios";

export const apiBaseUrl = "https://moneylex.online:8443"
export const baseUrl = "https://moneylex.online:8443" //main
export const introVideoUrl = `${apiBaseUrl}/files/intro_video.mp4`
export const tutorialVideoUrl = `${apiBaseUrl}/files/tutorial.mp4`

export function circleVideo(number: number) {
    return `${apiBaseUrl}/files/circle_video_${number}.mp4`
}

export async function getVideoCount(): Promise<number> {
    try {
        const response = await axios.get(`${apiBaseUrl}/files/circle_video_count`)
        return response.data;
    } catch (e) {
        console.log(e);
        return 0;
    }
}

export interface ExchangeRates {
    rubToThbFrom: number;
    rubToThbTo: number;
    usdtToThbFrom: number;
    usdtToThbTo: number;
    usdtToRubFrom: number;
    usdtToRubTo: number;
    thbToRubFrom: number;
    thbToRubTo: number;
    usdToRubFrom: number;
    usdToRubTo: number;
    rubToUsdtFrom: number;
    rubToUsdtTo: number;
    thbToUsdtFrom: number;
    thbToUsdtTo: number;
    usdToUsdtFrom: number;
    usdToUsdtTo: number;
    rubToUsdFrom: number;
    rubToUsdTo: number;
    usdtToUsdFrom: number;
    usdtToUsdTo: number;
    flag: boolean;
    isHidden: boolean;
}

export const getExchangeRates = async (): Promise<ExchangeRates> => {
    try {
        const response = await axios.get(`${baseUrl}/exchange_rates`);
        return response.data as ExchangeRates;
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
        throw error;
    }
};