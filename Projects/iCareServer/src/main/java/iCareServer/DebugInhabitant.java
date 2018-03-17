package iCareServer;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import main.java.iCareData.HealthCheck;
import main.java.iCareData.Position;

import java.util.ArrayList;
import java.util.List;
import javax.validation.Valid;


public class DebugInhabitant   {
  @JsonProperty("heartRate")
  private Integer heartRate = null;

  @JsonProperty("position")
  private Position position = null;

  /**
   * Gets or Sets restrictions
   */


  @JsonProperty("restrictions")
  public List<String> restrictions;

  @JsonProperty("healthCheck")
  private HealthCheck healthCheck = null;

  public DebugInhabitant heartRate(Integer heartRate) {
    this.heartRate = heartRate;
    return this;
  }

   /**
   * if the person wears a wrist band
   * @return heartRate
  **/

  public Integer getHeartRate() {
    return heartRate;
  }

  public void setHeartRate(Integer heartRate) {
    this.heartRate = heartRate;
  }

  public DebugInhabitant position(Position position) {
    this.position = position;
    return this;
  }

   /**
   * Get position
   * @return position
  **/
  @Valid

  public Position getPosition() {
    return position;
  }

  public void setPosition(Position position) {
    this.position = position;
  }

  public DebugInhabitant restrictions(List<String> restrictions) {
    this.restrictions = restrictions;
    return this;
  }

  public DebugInhabitant addRestrictionsItem(String restrictionsItem) {
    if (this.restrictions == null) {
      this.restrictions = new ArrayList<String>();
    }
    this.restrictions.add(restrictionsItem);
    return this;
  }

   /**
   * restrictions the person has, will trigger alarm if person does what he shouldn't
   * @return restrictions
  **/
  public List<String> getRestrictions() {
    return restrictions;
  }

  public void setRestrictions(List<String> restrictions) {
    this.restrictions = restrictions;
  }

  public DebugInhabitant healthCheck(HealthCheck healthCheck) {
    this.healthCheck = healthCheck;
    return this;
  }

   /**
   * Get healthCheck
   * @return healthCheck
  **/
  @Valid

  public HealthCheck getHealthCheck() {
    return healthCheck;
  }

  public void setHealthCheck(HealthCheck healthCheck) {
    this.healthCheck = healthCheck;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DebugInhabitant debugInhabitant = (DebugInhabitant) o;
    return Objects.equals(this.heartRate, debugInhabitant.heartRate) &&
        Objects.equals(this.position, debugInhabitant.position) &&
        Objects.equals(this.restrictions, debugInhabitant.restrictions) &&
        Objects.equals(this.healthCheck, debugInhabitant.healthCheck);
  }

  @Override
  public int hashCode() {
    return Objects.hash(heartRate, position, restrictions, healthCheck);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DebugInhabitant {\n");
    
    sb.append("    heartRate: ").append(toIndentedString(heartRate)).append("\n");
    sb.append("    position: ").append(toIndentedString(position)).append("\n");
    sb.append("    restrictions: ").append(toIndentedString(restrictions)).append("\n");
    sb.append("    healthCheck: ").append(toIndentedString(healthCheck)).append("\n");
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

