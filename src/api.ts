import axios from "axios";

export const apiBaseUrl = "https://moneylex.online:8441"
export const introVideoUrl = `${apiBaseUrl}/files/intro_video.mp4`
export const circleVideoUrl = `${apiBaseUrl}/files/circle_video_0.mp4`

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