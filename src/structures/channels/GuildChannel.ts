import Guild from '../Guild.ts';
import Channel from './Channel.ts';

export default class GuildChannel extends Channel {
	public guild: Guild;
	public name: string;
	public type: number;
	public nsfw: boolean;
	public position: string;
	public parentID: string;
	public permissionOverwrites: object[];

	constructor(data: any, guild: Guild) {
		super(data);
		this.guild = guild;
		this.name = data.name;
		this.type = data.type;
		this.nsfw = data.nsfw;
		this.position = data.position;
		this.parentID = data.parent_id;
		this.permissionOverwrites = data.permission_overwrites;
	}
}
