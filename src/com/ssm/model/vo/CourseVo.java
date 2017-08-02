package com.ssm.model.vo;

import java.util.Date;

public class CourseVo {
    private Long id;

    private Long universityId;

    private Long typeId;

    private String imageUrl;

    private String name;

    private String teacher;

    private String intro;

    private Boolean isRecommend;

    private Boolean isDelete;

    private Long createId;

    private Date createTime;

    private Long updateId;

    private Date updateTime;

    private Long praise;
    
    private String tname;
    
    private Integer count;
    
    private String uname;
    
    private Integer pageStar;
    

	private Integer pagesize;
    
	public Integer getPageStar() {
		return pageStar;
	}
	
	public void setPageStar(Integer pageStar) {
		this.pageStar = pageStar;
	}
	
	public Integer getPagesize() {
		return pagesize;
	}
	
	public void setPagesize(Integer pagesize) {
		this.pagesize = pagesize;
	}
	
	public String getTname() {
		return tname;
	}

	public void setTname(String tname) {
		this.tname = tname;
	}

	public Integer getCount() {
		return count;
	}

	public void setCount(Integer count) {
		this.count = count;
	}

	public String getUname() {
		return uname;
	}

	public void setUname(String uname) {
		this.uname = uname;
	}

	public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUniversityId() {
        return universityId;
    }

    public void setUniversityId(Long universityId) {
        this.universityId = universityId;
    }

    public Long getTypeId() {
        return typeId;
    }

    public void setTypeId(Long typeId) {
        this.typeId = typeId;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl == null ? null : imageUrl.trim();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getTeacher() {
        return teacher;
    }

    public void setTeacher(String teacher) {
        this.teacher = teacher == null ? null : teacher.trim();
    }

    public String getIntro() {
        return intro;
    }

    public void setIntro(String intro) {
        this.intro = intro == null ? null : intro.trim();
    }

    public Boolean getIsRecommend() {
        return isRecommend;
    }

    public void setIsRecommend(Boolean isRecommend) {
        this.isRecommend = isRecommend;
    }

    public Boolean getIsDelete() {
        return isDelete;
    }

    public void setIsDelete(Boolean isDelete) {
        this.isDelete = isDelete;
    }

    public Long getCreateId() {
        return createId;
    }

    public void setCreateId(Long createId) {
        this.createId = createId;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Long getUpdateId() {
        return updateId;
    }

    public void setUpdateId(Long updateId) {
        this.updateId = updateId;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    public Long getPraise() {
        return praise;
    }

    public void setPraise(Long praise) {
        this.praise = praise;
    }
    
    @Override
   	public String toString() {
   		return "CourseVo [id=" + id + ", universityId=" + universityId
   				+ ", typeId=" + typeId + ", imageUrl=" + imageUrl + ", name="
   				+ name + ", teacher=" + teacher + ", intro=" + intro
   				+ ", isRecommend=" + isRecommend + ", isDelete=" + isDelete
   				+ ", createId=" + createId + ", createTime=" + createTime
   				+ ", updateId=" + updateId + ", updateTime=" + updateTime
   				+ ", praise=" + praise + ", tname=" + tname + ", count="
   				+ count + ", uname=" + uname + "]";
   	}
}