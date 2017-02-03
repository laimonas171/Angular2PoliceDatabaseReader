import {Force} from "./force";
import {EngagementMethods} from "./engagement-methods";
export class DetailedForce extends Force{
    public description: string;
    public telephone: string;
    public url: string;
    public engagement_methods: EngagementMethods[];
}
