package iCareServer;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import javax.validation.constraints.*;

/**
 * Debug command for triggering a alarm button pressed by an inhabitant.
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2018-03-12T08:04:55.276Z")

public class DebugNotification {
	/**
	 * The message is based on which button the person has pressed
	 */

	@JsonProperty("message")
	private String message;

	@JsonProperty("roomId")
	private String roomId = null;

	@JsonProperty("sender")
	private String sender;
	
	@JsonProperty("severity")
	private Severity severity;

	public DebugNotification message(String message) {
		this.message = message;
		return this;
	}

	/**
	 * The message is based on which button the person has pressed
	 * 
	 * @return message
	 **/
	@NotNull

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public DebugNotification roomId(String roomId) {
		this.roomId = roomId;
		return this;
	}
	
	public String getSender() {
		return sender;
	}

	public void setSender(String sender) {
		this.sender = sender;
	}

	public Severity getSeverity() {
		return severity;
	}

	public void setSeverity(Severity severity) {
		this.severity = severity;
	}

	/**
	 * The room ID where the button was pressed
	 * 
	 * @return roomId
	 **/

	@NotNull

	public String getRoomId() {
		return roomId;
	}

	public void setRoomId(String roomId) {
		this.roomId = roomId;
	}

	@Override
	public boolean equals(java.lang.Object o) {
		if (this == o) {
			return true;
		}
		if (o == null || getClass() != o.getClass()) {
			return false;
		}
		DebugNotification debugNotification = (DebugNotification) o;
		return Objects.equals(this.message, debugNotification.message)
				&& Objects.equals(this.roomId, debugNotification.roomId);
	}

	@Override
	public int hashCode() {
		return Objects.hash(message, roomId);
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("class DebugNotification {\n");

		sb.append("    message: ").append(toIndentedString(message)).append("\n");
		sb.append("    roomId: ").append(toIndentedString(roomId)).append("\n");
		sb.append("}");
		return sb.toString();
	}

	/**
	 * Convert the given object to string with each line indented by 4 spaces
	 * (except the first line).
	 */
	private String toIndentedString(java.lang.Object o) {
		if (o == null) {
			return "null";
		}
		return o.toString().replace("\n", "\n    ");
	}
}
