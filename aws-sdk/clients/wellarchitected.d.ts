import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class WellArchitected extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: WellArchitected.Types.ClientConfiguration)
  config: Config & WellArchitected.Types.ClientConfiguration;
  /**
   * Associate a lens to a workload. Up to 10 lenses can be associated with a workload in a single API operation. A maximum of 20 lenses can be associated with a workload.   Disclaimer  By accessing and/or applying custom lenses created by another Amazon Web Services user or account, you acknowledge that custom lenses created by other users and shared with you are Third Party Content as defined in the Amazon Web Services Customer Agreement.  
   */
  associateLenses(params: WellArchitected.Types.AssociateLensesInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Associate a lens to a workload. Up to 10 lenses can be associated with a workload in a single API operation. A maximum of 20 lenses can be associated with a workload.   Disclaimer  By accessing and/or applying custom lenses created by another Amazon Web Services user or account, you acknowledge that custom lenses created by other users and shared with you are Third Party Content as defined in the Amazon Web Services Customer Agreement.  
   */
  associateLenses(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Create a lens share. The owner of a lens can share it with other Amazon Web Services accounts and IAM users in the same Amazon Web Services Region. Shared access to a lens is not removed until the lens invitation is deleted.   Disclaimer  By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account. 
   */
  createLensShare(params: WellArchitected.Types.CreateLensShareInput, callback?: (err: AWSError, data: WellArchitected.Types.CreateLensShareOutput) => void): Request<WellArchitected.Types.CreateLensShareOutput, AWSError>;
  /**
   * Create a lens share. The owner of a lens can share it with other Amazon Web Services accounts and IAM users in the same Amazon Web Services Region. Shared access to a lens is not removed until the lens invitation is deleted.   Disclaimer  By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account. 
   */
  createLensShare(callback?: (err: AWSError, data: WellArchitected.Types.CreateLensShareOutput) => void): Request<WellArchitected.Types.CreateLensShareOutput, AWSError>;
  /**
   * Create a new lens version. A lens can have up to 100 versions. After a lens has been imported, create a new lens version to publish it. The owner of a lens can share the lens with other Amazon Web Services accounts and IAM users in the same Amazon Web Services Region. Only the owner of a lens can delete it. 
   */
  createLensVersion(params: WellArchitected.Types.CreateLensVersionInput, callback?: (err: AWSError, data: WellArchitected.Types.CreateLensVersionOutput) => void): Request<WellArchitected.Types.CreateLensVersionOutput, AWSError>;
  /**
   * Create a new lens version. A lens can have up to 100 versions. After a lens has been imported, create a new lens version to publish it. The owner of a lens can share the lens with other Amazon Web Services accounts and IAM users in the same Amazon Web Services Region. Only the owner of a lens can delete it. 
   */
  createLensVersion(callback?: (err: AWSError, data: WellArchitected.Types.CreateLensVersionOutput) => void): Request<WellArchitected.Types.CreateLensVersionOutput, AWSError>;
  /**
   * Create a milestone for an existing workload.
   */
  createMilestone(params: WellArchitected.Types.CreateMilestoneInput, callback?: (err: AWSError, data: WellArchitected.Types.CreateMilestoneOutput) => void): Request<WellArchitected.Types.CreateMilestoneOutput, AWSError>;
  /**
   * Create a milestone for an existing workload.
   */
  createMilestone(callback?: (err: AWSError, data: WellArchitected.Types.CreateMilestoneOutput) => void): Request<WellArchitected.Types.CreateMilestoneOutput, AWSError>;
  /**
   * Create a new workload. The owner of a workload can share the workload with other Amazon Web Services accounts and IAM users in the same Amazon Web Services Region. Only the owner of a workload can delete it. For more information, see Defining a Workload in the Well-Architected Tool User Guide.
   */
  createWorkload(params: WellArchitected.Types.CreateWorkloadInput, callback?: (err: AWSError, data: WellArchitected.Types.CreateWorkloadOutput) => void): Request<WellArchitected.Types.CreateWorkloadOutput, AWSError>;
  /**
   * Create a new workload. The owner of a workload can share the workload with other Amazon Web Services accounts and IAM users in the same Amazon Web Services Region. Only the owner of a workload can delete it. For more information, see Defining a Workload in the Well-Architected Tool User Guide.
   */
  createWorkload(callback?: (err: AWSError, data: WellArchitected.Types.CreateWorkloadOutput) => void): Request<WellArchitected.Types.CreateWorkloadOutput, AWSError>;
  /**
   * Create a workload share. The owner of a workload can share it with other Amazon Web Services accounts and IAM users in the same Amazon Web Services Region. Shared access to a workload is not removed until the workload invitation is deleted. For more information, see Sharing a Workload in the Well-Architected Tool User Guide.
   */
  createWorkloadShare(params: WellArchitected.Types.CreateWorkloadShareInput, callback?: (err: AWSError, data: WellArchitected.Types.CreateWorkloadShareOutput) => void): Request<WellArchitected.Types.CreateWorkloadShareOutput, AWSError>;
  /**
   * Create a workload share. The owner of a workload can share it with other Amazon Web Services accounts and IAM users in the same Amazon Web Services Region. Shared access to a workload is not removed until the workload invitation is deleted. For more information, see Sharing a Workload in the Well-Architected Tool User Guide.
   */
  createWorkloadShare(callback?: (err: AWSError, data: WellArchitected.Types.CreateWorkloadShareOutput) => void): Request<WellArchitected.Types.CreateWorkloadShareOutput, AWSError>;
  /**
   * Delete an existing lens. Only the owner of a lens can delete it. After the lens is deleted, Amazon Web Services accounts and IAM users that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads.    Disclaimer  By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account. 
   */
  deleteLens(params: WellArchitected.Types.DeleteLensInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Delete an existing lens. Only the owner of a lens can delete it. After the lens is deleted, Amazon Web Services accounts and IAM users that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads.    Disclaimer  By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account. 
   */
  deleteLens(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Delete a lens share. After the lens share is deleted, Amazon Web Services accounts and IAM users that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads.   Disclaimer  By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account. 
   */
  deleteLensShare(params: WellArchitected.Types.DeleteLensShareInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Delete a lens share. After the lens share is deleted, Amazon Web Services accounts and IAM users that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads.   Disclaimer  By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account. 
   */
  deleteLensShare(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Delete an existing workload.
   */
  deleteWorkload(params: WellArchitected.Types.DeleteWorkloadInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Delete an existing workload.
   */
  deleteWorkload(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Delete a workload share.
   */
  deleteWorkloadShare(params: WellArchitected.Types.DeleteWorkloadShareInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Delete a workload share.
   */
  deleteWorkloadShare(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disassociate a lens from a workload. Up to 10 lenses can be disassociated from a workload in a single API operation.  The Amazon Web Services Well-Architected Framework lens (wellarchitected) cannot be removed from a workload. 
   */
  disassociateLenses(params: WellArchitected.Types.DisassociateLensesInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disassociate a lens from a workload. Up to 10 lenses can be disassociated from a workload in a single API operation.  The Amazon Web Services Well-Architected Framework lens (wellarchitected) cannot be removed from a workload. 
   */
  disassociateLenses(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Export an existing lens. Lenses are defined in JSON. For more information, see JSON format specification in the Well-Architected Tool User Guide. Only the owner of a lens can export it.    Disclaimer  Do not include or gather personal identifiable information (PII) of end users or other identifiable individuals in or via your custom lenses. If your custom lens or those shared with you and used in your account do include or collect PII you are responsible for: ensuring that the included PII is processed in accordance with applicable law, providing adequate privacy notices, and obtaining necessary consents for processing such data. 
   */
  exportLens(params: WellArchitected.Types.ExportLensInput, callback?: (err: AWSError, data: WellArchitected.Types.ExportLensOutput) => void): Request<WellArchitected.Types.ExportLensOutput, AWSError>;
  /**
   * Export an existing lens. Lenses are defined in JSON. For more information, see JSON format specification in the Well-Architected Tool User Guide. Only the owner of a lens can export it.    Disclaimer  Do not include or gather personal identifiable information (PII) of end users or other identifiable individuals in or via your custom lenses. If your custom lens or those shared with you and used in your account do include or collect PII you are responsible for: ensuring that the included PII is processed in accordance with applicable law, providing adequate privacy notices, and obtaining necessary consents for processing such data. 
   */
  exportLens(callback?: (err: AWSError, data: WellArchitected.Types.ExportLensOutput) => void): Request<WellArchitected.Types.ExportLensOutput, AWSError>;
  /**
   * Get the answer to a specific question in a workload review.
   */
  getAnswer(params: WellArchitected.Types.GetAnswerInput, callback?: (err: AWSError, data: WellArchitected.Types.GetAnswerOutput) => void): Request<WellArchitected.Types.GetAnswerOutput, AWSError>;
  /**
   * Get the answer to a specific question in a workload review.
   */
  getAnswer(callback?: (err: AWSError, data: WellArchitected.Types.GetAnswerOutput) => void): Request<WellArchitected.Types.GetAnswerOutput, AWSError>;
  /**
   * Get an existing lens.
   */
  getLens(params: WellArchitected.Types.GetLensInput, callback?: (err: AWSError, data: WellArchitected.Types.GetLensOutput) => void): Request<WellArchitected.Types.GetLensOutput, AWSError>;
  /**
   * Get an existing lens.
   */
  getLens(callback?: (err: AWSError, data: WellArchitected.Types.GetLensOutput) => void): Request<WellArchitected.Types.GetLensOutput, AWSError>;
  /**
   * Get lens review.
   */
  getLensReview(params: WellArchitected.Types.GetLensReviewInput, callback?: (err: AWSError, data: WellArchitected.Types.GetLensReviewOutput) => void): Request<WellArchitected.Types.GetLensReviewOutput, AWSError>;
  /**
   * Get lens review.
   */
  getLensReview(callback?: (err: AWSError, data: WellArchitected.Types.GetLensReviewOutput) => void): Request<WellArchitected.Types.GetLensReviewOutput, AWSError>;
  /**
   * Get lens review report.
   */
  getLensReviewReport(params: WellArchitected.Types.GetLensReviewReportInput, callback?: (err: AWSError, data: WellArchitected.Types.GetLensReviewReportOutput) => void): Request<WellArchitected.Types.GetLensReviewReportOutput, AWSError>;
  /**
   * Get lens review report.
   */
  getLensReviewReport(callback?: (err: AWSError, data: WellArchitected.Types.GetLensReviewReportOutput) => void): Request<WellArchitected.Types.GetLensReviewReportOutput, AWSError>;
  /**
   * Get lens version differences.
   */
  getLensVersionDifference(params: WellArchitected.Types.GetLensVersionDifferenceInput, callback?: (err: AWSError, data: WellArchitected.Types.GetLensVersionDifferenceOutput) => void): Request<WellArchitected.Types.GetLensVersionDifferenceOutput, AWSError>;
  /**
   * Get lens version differences.
   */
  getLensVersionDifference(callback?: (err: AWSError, data: WellArchitected.Types.GetLensVersionDifferenceOutput) => void): Request<WellArchitected.Types.GetLensVersionDifferenceOutput, AWSError>;
  /**
   * Get a milestone for an existing workload.
   */
  getMilestone(params: WellArchitected.Types.GetMilestoneInput, callback?: (err: AWSError, data: WellArchitected.Types.GetMilestoneOutput) => void): Request<WellArchitected.Types.GetMilestoneOutput, AWSError>;
  /**
   * Get a milestone for an existing workload.
   */
  getMilestone(callback?: (err: AWSError, data: WellArchitected.Types.GetMilestoneOutput) => void): Request<WellArchitected.Types.GetMilestoneOutput, AWSError>;
  /**
   * Get an existing workload.
   */
  getWorkload(params: WellArchitected.Types.GetWorkloadInput, callback?: (err: AWSError, data: WellArchitected.Types.GetWorkloadOutput) => void): Request<WellArchitected.Types.GetWorkloadOutput, AWSError>;
  /**
   * Get an existing workload.
   */
  getWorkload(callback?: (err: AWSError, data: WellArchitected.Types.GetWorkloadOutput) => void): Request<WellArchitected.Types.GetWorkloadOutput, AWSError>;
  /**
   * Import a new lens. The lens cannot be applied to workloads or shared with other Amazon Web Services accounts until it's published with CreateLensVersion  Lenses are defined in JSON. For more information, see JSON format specification in the Well-Architected Tool User Guide. A custom lens cannot exceed 500 KB in size.   Disclaimer  Do not include or gather personal identifiable information (PII) of end users or other identifiable individuals in or via your custom lenses. If your custom lens or those shared with you and used in your account do include or collect PII you are responsible for: ensuring that the included PII is processed in accordance with applicable law, providing adequate privacy notices, and obtaining necessary consents for processing such data. 
   */
  importLens(params: WellArchitected.Types.ImportLensInput, callback?: (err: AWSError, data: WellArchitected.Types.ImportLensOutput) => void): Request<WellArchitected.Types.ImportLensOutput, AWSError>;
  /**
   * Import a new lens. The lens cannot be applied to workloads or shared with other Amazon Web Services accounts until it's published with CreateLensVersion  Lenses are defined in JSON. For more information, see JSON format specification in the Well-Architected Tool User Guide. A custom lens cannot exceed 500 KB in size.   Disclaimer  Do not include or gather personal identifiable information (PII) of end users or other identifiable individuals in or via your custom lenses. If your custom lens or those shared with you and used in your account do include or collect PII you are responsible for: ensuring that the included PII is processed in accordance with applicable law, providing adequate privacy notices, and obtaining necessary consents for processing such data. 
   */
  importLens(callback?: (err: AWSError, data: WellArchitected.Types.ImportLensOutput) => void): Request<WellArchitected.Types.ImportLensOutput, AWSError>;
  /**
   * List of answers.
   */
  listAnswers(params: WellArchitected.Types.ListAnswersInput, callback?: (err: AWSError, data: WellArchitected.Types.ListAnswersOutput) => void): Request<WellArchitected.Types.ListAnswersOutput, AWSError>;
  /**
   * List of answers.
   */
  listAnswers(callback?: (err: AWSError, data: WellArchitected.Types.ListAnswersOutput) => void): Request<WellArchitected.Types.ListAnswersOutput, AWSError>;
  /**
   * List lens review improvements.
   */
  listLensReviewImprovements(params: WellArchitected.Types.ListLensReviewImprovementsInput, callback?: (err: AWSError, data: WellArchitected.Types.ListLensReviewImprovementsOutput) => void): Request<WellArchitected.Types.ListLensReviewImprovementsOutput, AWSError>;
  /**
   * List lens review improvements.
   */
  listLensReviewImprovements(callback?: (err: AWSError, data: WellArchitected.Types.ListLensReviewImprovementsOutput) => void): Request<WellArchitected.Types.ListLensReviewImprovementsOutput, AWSError>;
  /**
   * List lens reviews.
   */
  listLensReviews(params: WellArchitected.Types.ListLensReviewsInput, callback?: (err: AWSError, data: WellArchitected.Types.ListLensReviewsOutput) => void): Request<WellArchitected.Types.ListLensReviewsOutput, AWSError>;
  /**
   * List lens reviews.
   */
  listLensReviews(callback?: (err: AWSError, data: WellArchitected.Types.ListLensReviewsOutput) => void): Request<WellArchitected.Types.ListLensReviewsOutput, AWSError>;
  /**
   * List the lens shares associated with the lens.
   */
  listLensShares(params: WellArchitected.Types.ListLensSharesInput, callback?: (err: AWSError, data: WellArchitected.Types.ListLensSharesOutput) => void): Request<WellArchitected.Types.ListLensSharesOutput, AWSError>;
  /**
   * List the lens shares associated with the lens.
   */
  listLensShares(callback?: (err: AWSError, data: WellArchitected.Types.ListLensSharesOutput) => void): Request<WellArchitected.Types.ListLensSharesOutput, AWSError>;
  /**
   * List the available lenses.
   */
  listLenses(params: WellArchitected.Types.ListLensesInput, callback?: (err: AWSError, data: WellArchitected.Types.ListLensesOutput) => void): Request<WellArchitected.Types.ListLensesOutput, AWSError>;
  /**
   * List the available lenses.
   */
  listLenses(callback?: (err: AWSError, data: WellArchitected.Types.ListLensesOutput) => void): Request<WellArchitected.Types.ListLensesOutput, AWSError>;
  /**
   * List all milestones for an existing workload.
   */
  listMilestones(params: WellArchitected.Types.ListMilestonesInput, callback?: (err: AWSError, data: WellArchitected.Types.ListMilestonesOutput) => void): Request<WellArchitected.Types.ListMilestonesOutput, AWSError>;
  /**
   * List all milestones for an existing workload.
   */
  listMilestones(callback?: (err: AWSError, data: WellArchitected.Types.ListMilestonesOutput) => void): Request<WellArchitected.Types.ListMilestonesOutput, AWSError>;
  /**
   * List lens notifications.
   */
  listNotifications(params: WellArchitected.Types.ListNotificationsInput, callback?: (err: AWSError, data: WellArchitected.Types.ListNotificationsOutput) => void): Request<WellArchitected.Types.ListNotificationsOutput, AWSError>;
  /**
   * List lens notifications.
   */
  listNotifications(callback?: (err: AWSError, data: WellArchitected.Types.ListNotificationsOutput) => void): Request<WellArchitected.Types.ListNotificationsOutput, AWSError>;
  /**
   * List the workload invitations.
   */
  listShareInvitations(params: WellArchitected.Types.ListShareInvitationsInput, callback?: (err: AWSError, data: WellArchitected.Types.ListShareInvitationsOutput) => void): Request<WellArchitected.Types.ListShareInvitationsOutput, AWSError>;
  /**
   * List the workload invitations.
   */
  listShareInvitations(callback?: (err: AWSError, data: WellArchitected.Types.ListShareInvitationsOutput) => void): Request<WellArchitected.Types.ListShareInvitationsOutput, AWSError>;
  /**
   * List the tags for a resource.
   */
  listTagsForResource(params: WellArchitected.Types.ListTagsForResourceInput, callback?: (err: AWSError, data: WellArchitected.Types.ListTagsForResourceOutput) => void): Request<WellArchitected.Types.ListTagsForResourceOutput, AWSError>;
  /**
   * List the tags for a resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: WellArchitected.Types.ListTagsForResourceOutput) => void): Request<WellArchitected.Types.ListTagsForResourceOutput, AWSError>;
  /**
   * List the workload shares associated with the workload.
   */
  listWorkloadShares(params: WellArchitected.Types.ListWorkloadSharesInput, callback?: (err: AWSError, data: WellArchitected.Types.ListWorkloadSharesOutput) => void): Request<WellArchitected.Types.ListWorkloadSharesOutput, AWSError>;
  /**
   * List the workload shares associated with the workload.
   */
  listWorkloadShares(callback?: (err: AWSError, data: WellArchitected.Types.ListWorkloadSharesOutput) => void): Request<WellArchitected.Types.ListWorkloadSharesOutput, AWSError>;
  /**
   * List workloads. Paginated.
   */
  listWorkloads(params: WellArchitected.Types.ListWorkloadsInput, callback?: (err: AWSError, data: WellArchitected.Types.ListWorkloadsOutput) => void): Request<WellArchitected.Types.ListWorkloadsOutput, AWSError>;
  /**
   * List workloads. Paginated.
   */
  listWorkloads(callback?: (err: AWSError, data: WellArchitected.Types.ListWorkloadsOutput) => void): Request<WellArchitected.Types.ListWorkloadsOutput, AWSError>;
  /**
   * Adds one or more tags to the specified resource.
   */
  tagResource(params: WellArchitected.Types.TagResourceInput, callback?: (err: AWSError, data: WellArchitected.Types.TagResourceOutput) => void): Request<WellArchitected.Types.TagResourceOutput, AWSError>;
  /**
   * Adds one or more tags to the specified resource.
   */
  tagResource(callback?: (err: AWSError, data: WellArchitected.Types.TagResourceOutput) => void): Request<WellArchitected.Types.TagResourceOutput, AWSError>;
  /**
   * Deletes specified tags from a resource. To specify multiple tags, use separate tagKeys parameters, for example:  DELETE /tags/WorkloadArn?tagKeys=key1&amp;tagKeys=key2 
   */
  untagResource(params: WellArchitected.Types.UntagResourceInput, callback?: (err: AWSError, data: WellArchitected.Types.UntagResourceOutput) => void): Request<WellArchitected.Types.UntagResourceOutput, AWSError>;
  /**
   * Deletes specified tags from a resource. To specify multiple tags, use separate tagKeys parameters, for example:  DELETE /tags/WorkloadArn?tagKeys=key1&amp;tagKeys=key2 
   */
  untagResource(callback?: (err: AWSError, data: WellArchitected.Types.UntagResourceOutput) => void): Request<WellArchitected.Types.UntagResourceOutput, AWSError>;
  /**
   * Update the answer to a specific question in a workload review.
   */
  updateAnswer(params: WellArchitected.Types.UpdateAnswerInput, callback?: (err: AWSError, data: WellArchitected.Types.UpdateAnswerOutput) => void): Request<WellArchitected.Types.UpdateAnswerOutput, AWSError>;
  /**
   * Update the answer to a specific question in a workload review.
   */
  updateAnswer(callback?: (err: AWSError, data: WellArchitected.Types.UpdateAnswerOutput) => void): Request<WellArchitected.Types.UpdateAnswerOutput, AWSError>;
  /**
   * Update lens review.
   */
  updateLensReview(params: WellArchitected.Types.UpdateLensReviewInput, callback?: (err: AWSError, data: WellArchitected.Types.UpdateLensReviewOutput) => void): Request<WellArchitected.Types.UpdateLensReviewOutput, AWSError>;
  /**
   * Update lens review.
   */
  updateLensReview(callback?: (err: AWSError, data: WellArchitected.Types.UpdateLensReviewOutput) => void): Request<WellArchitected.Types.UpdateLensReviewOutput, AWSError>;
  /**
   * Update a workload invitation.
   */
  updateShareInvitation(params: WellArchitected.Types.UpdateShareInvitationInput, callback?: (err: AWSError, data: WellArchitected.Types.UpdateShareInvitationOutput) => void): Request<WellArchitected.Types.UpdateShareInvitationOutput, AWSError>;
  /**
   * Update a workload invitation.
   */
  updateShareInvitation(callback?: (err: AWSError, data: WellArchitected.Types.UpdateShareInvitationOutput) => void): Request<WellArchitected.Types.UpdateShareInvitationOutput, AWSError>;
  /**
   * Update an existing workload.
   */
  updateWorkload(params: WellArchitected.Types.UpdateWorkloadInput, callback?: (err: AWSError, data: WellArchitected.Types.UpdateWorkloadOutput) => void): Request<WellArchitected.Types.UpdateWorkloadOutput, AWSError>;
  /**
   * Update an existing workload.
   */
  updateWorkload(callback?: (err: AWSError, data: WellArchitected.Types.UpdateWorkloadOutput) => void): Request<WellArchitected.Types.UpdateWorkloadOutput, AWSError>;
  /**
   * Update a workload share.
   */
  updateWorkloadShare(params: WellArchitected.Types.UpdateWorkloadShareInput, callback?: (err: AWSError, data: WellArchitected.Types.UpdateWorkloadShareOutput) => void): Request<WellArchitected.Types.UpdateWorkloadShareOutput, AWSError>;
  /**
   * Update a workload share.
   */
  updateWorkloadShare(callback?: (err: AWSError, data: WellArchitected.Types.UpdateWorkloadShareOutput) => void): Request<WellArchitected.Types.UpdateWorkloadShareOutput, AWSError>;
  /**
   * Upgrade lens review.
   */
  upgradeLensReview(params: WellArchitected.Types.UpgradeLensReviewInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Upgrade lens review.
   */
  upgradeLensReview(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
}
declare namespace WellArchitected {
  export interface Answer {
    QuestionId?: QuestionId;
    PillarId?: PillarId;
    QuestionTitle?: QuestionTitle;
    QuestionDescription?: QuestionDescription;
    ImprovementPlanUrl?: ImprovementPlanUrl;
    HelpfulResourceUrl?: HelpfulResourceUrl;
    /**
     * The helpful resource text to be displayed.
     */
    HelpfulResourceDisplayText?: DisplayText;
    Choices?: Choices;
    SelectedChoices?: SelectedChoices;
    /**
     * A list of selected choices to a question in your workload.
     */
    ChoiceAnswers?: ChoiceAnswers;
    IsApplicable?: IsApplicable;
    Risk?: Risk;
    Notes?: Notes;
    /**
     * The reason why the question is not applicable to your workload.
     */
    Reason?: AnswerReason;
  }
  export type AnswerReason = "OUT_OF_SCOPE"|"BUSINESS_PRIORITIES"|"ARCHITECTURE_CONSTRAINTS"|"OTHER"|"NONE"|string;
  export type AnswerSummaries = AnswerSummary[];
  export interface AnswerSummary {
    QuestionId?: QuestionId;
    PillarId?: PillarId;
    QuestionTitle?: QuestionTitle;
    Choices?: Choices;
    SelectedChoices?: SelectedChoices;
    /**
     * A list of selected choices to a question in your workload.
     */
    ChoiceAnswerSummaries?: ChoiceAnswerSummaries;
    IsApplicable?: IsApplicable;
    Risk?: Risk;
    /**
     * The reason why a choice is non-applicable to a question in your workload.
     */
    Reason?: AnswerReason;
  }
  export interface AssociateLensesInput {
    WorkloadId: WorkloadId;
    LensAliases: LensAliases;
  }
  export type AwsAccountId = string;
  export type AwsRegion = string;
  export type Base64String = string;
  export interface Choice {
    ChoiceId?: ChoiceId;
    Title?: ChoiceTitle;
    Description?: ChoiceDescription;
    /**
     * The choice level helpful resource.
     */
    HelpfulResource?: ChoiceContent;
    /**
     * The choice level improvement plan.
     */
    ImprovementPlan?: ChoiceContent;
  }
  export interface ChoiceAnswer {
    ChoiceId?: ChoiceId;
    /**
     * The status of a choice.
     */
    Status?: ChoiceStatus;
    /**
     * The reason why a choice is non-applicable to a question in your workload.
     */
    Reason?: ChoiceReason;
    /**
     * The notes associated with a choice.
     */
    Notes?: ChoiceNotes;
  }
  export type ChoiceAnswerSummaries = ChoiceAnswerSummary[];
  export interface ChoiceAnswerSummary {
    ChoiceId?: ChoiceId;
    /**
     * The status of a choice.
     */
    Status?: ChoiceStatus;
    /**
     * The reason why a choice is non-applicable to a question in your workload.
     */
    Reason?: ChoiceReason;
  }
  export type ChoiceAnswers = ChoiceAnswer[];
  export interface ChoiceContent {
    /**
     * The display text for the choice content.
     */
    DisplayText?: ChoiceContentDisplayText;
    /**
     * The URL for the choice content.
     */
    Url?: ChoiceContentUrl;
  }
  export type ChoiceContentDisplayText = string;
  export type ChoiceContentUrl = string;
  export type ChoiceDescription = string;
  export type ChoiceId = string;
  export interface ChoiceImprovementPlan {
    ChoiceId?: ChoiceId;
    /**
     * The display text for the improvement plan.
     */
    DisplayText?: DisplayText;
    ImprovementPlanUrl?: ImprovementPlanUrl;
  }
  export type ChoiceImprovementPlans = ChoiceImprovementPlan[];
  export type ChoiceNotes = string;
  export type ChoiceReason = "OUT_OF_SCOPE"|"BUSINESS_PRIORITIES"|"ARCHITECTURE_CONSTRAINTS"|"OTHER"|"NONE"|string;
  export type ChoiceStatus = "SELECTED"|"NOT_APPLICABLE"|"UNSELECTED"|string;
  export type ChoiceTitle = string;
  export interface ChoiceUpdate {
    /**
     * The status of a choice.
     */
    Status: ChoiceStatus;
    /**
     * The reason why a choice is non-applicable to a question in your workload.
     */
    Reason?: ChoiceReason;
    /**
     * The notes associated with a choice.
     */
    Notes?: ChoiceNotes;
  }
  export type ChoiceUpdates = {[key: string]: ChoiceUpdate};
  export type Choices = Choice[];
  export type ClientRequestToken = string;
  export type Count = number;
  export interface CreateLensShareInput {
    LensAlias: LensAlias;
    SharedWith: SharedWith;
    ClientRequestToken: ClientRequestToken;
  }
  export interface CreateLensShareOutput {
    ShareId?: ShareId;
  }
  export interface CreateLensVersionInput {
    LensAlias: LensAlias;
    /**
     * The version of the lens being created.
     */
    LensVersion: LensVersion;
    /**
     * Set to true if this new major lens version.
     */
    IsMajorVersion?: IsMajorVersion;
    ClientRequestToken: ClientRequestToken;
  }
  export interface CreateLensVersionOutput {
    /**
     * The ARN for the lens.
     */
    LensArn?: LensArn;
    /**
     * The version of the lens.
     */
    LensVersion?: LensVersion;
  }
  export interface CreateMilestoneInput {
    WorkloadId: WorkloadId;
    MilestoneName: MilestoneName;
    ClientRequestToken: ClientRequestToken;
  }
  export interface CreateMilestoneOutput {
    WorkloadId?: WorkloadId;
    MilestoneNumber?: MilestoneNumber;
  }
  export interface CreateWorkloadInput {
    WorkloadName: WorkloadName;
    Description: WorkloadDescription;
    Environment: WorkloadEnvironment;
    AccountIds?: WorkloadAccountIds;
    AwsRegions?: WorkloadAwsRegions;
    NonAwsRegions?: WorkloadNonAwsRegions;
    PillarPriorities?: WorkloadPillarPriorities;
    ArchitecturalDesign?: WorkloadArchitecturalDesign;
    ReviewOwner: WorkloadReviewOwner;
    IndustryType?: WorkloadIndustryType;
    Industry?: WorkloadIndustry;
    Lenses: WorkloadLenses;
    Notes?: Notes;
    ClientRequestToken: ClientRequestToken;
    /**
     * The tags to be associated with the workload.
     */
    Tags?: TagMap;
  }
  export interface CreateWorkloadOutput {
    WorkloadId?: WorkloadId;
    WorkloadArn?: WorkloadArn;
  }
  export interface CreateWorkloadShareInput {
    WorkloadId: WorkloadId;
    SharedWith: SharedWith;
    PermissionType: PermissionType;
    ClientRequestToken: ClientRequestToken;
  }
  export interface CreateWorkloadShareOutput {
    WorkloadId?: WorkloadId;
    ShareId?: ShareId;
  }
  export interface DeleteLensInput {
    LensAlias: LensAlias;
    ClientRequestToken: ClientRequestToken;
    /**
     * The status of the lens to be deleted.
     */
    LensStatus: LensStatusType;
  }
  export interface DeleteLensShareInput {
    ShareId: ShareId;
    LensAlias: LensAlias;
    ClientRequestToken: ClientRequestToken;
  }
  export interface DeleteWorkloadInput {
    WorkloadId: WorkloadId;
    ClientRequestToken: ClientRequestToken;
  }
  export interface DeleteWorkloadShareInput {
    ShareId: ShareId;
    WorkloadId: WorkloadId;
    ClientRequestToken: ClientRequestToken;
  }
  export type DifferenceStatus = "UPDATED"|"NEW"|"DELETED"|string;
  export interface DisassociateLensesInput {
    WorkloadId: WorkloadId;
    LensAliases: LensAliases;
  }
  export type DisplayText = string;
  export interface ExportLensInput {
    LensAlias: LensAlias;
    /**
     * The lens version to be exported.
     */
    LensVersion?: LensVersion;
  }
  export interface ExportLensOutput {
    /**
     * The JSON for the lens.
     */
    LensJSON?: LensJSON;
  }
  export interface GetAnswerInput {
    WorkloadId: WorkloadId;
    LensAlias: LensAlias;
    QuestionId: QuestionId;
    MilestoneNumber?: MilestoneNumber;
  }
  export interface GetAnswerOutput {
    WorkloadId?: WorkloadId;
    MilestoneNumber?: MilestoneNumber;
    LensAlias?: LensAlias;
    /**
     * The ARN for the lens.
     */
    LensArn?: LensArn;
    Answer?: Answer;
  }
  export interface GetLensInput {
    LensAlias: LensAlias;
    /**
     * The lens version to be retrieved.
     */
    LensVersion?: LensVersion;
  }
  export interface GetLensOutput {
    /**
     * A lens return object.
     */
    Lens?: Lens;
  }
  export interface GetLensReviewInput {
    WorkloadId: WorkloadId;
    LensAlias: LensAlias;
    MilestoneNumber?: MilestoneNumber;
  }
  export interface GetLensReviewOutput {
    WorkloadId?: WorkloadId;
    MilestoneNumber?: MilestoneNumber;
    LensReview?: LensReview;
  }
  export interface GetLensReviewReportInput {
    WorkloadId: WorkloadId;
    LensAlias: LensAlias;
    MilestoneNumber?: MilestoneNumber;
  }
  export interface GetLensReviewReportOutput {
    WorkloadId?: WorkloadId;
    MilestoneNumber?: MilestoneNumber;
    LensReviewReport?: LensReviewReport;
  }
  export interface GetLensVersionDifferenceInput {
    LensAlias: LensAlias;
    /**
     * The base version of the lens.
     */
    BaseLensVersion?: LensVersion;
    /**
     * The lens version to target a difference for.
     */
    TargetLensVersion?: LensVersion;
  }
  export interface GetLensVersionDifferenceOutput {
    LensAlias?: LensAlias;
    /**
     * The ARN for the lens.
     */
    LensArn?: LensArn;
    /**
     * The base version of the lens.
     */
    BaseLensVersion?: LensVersion;
    /**
     * The target lens version for the lens.
     */
    TargetLensVersion?: LensVersion;
    /**
     * The latest version of the lens.
     */
    LatestLensVersion?: LensVersion;
    VersionDifferences?: VersionDifferences;
  }
  export interface GetMilestoneInput {
    WorkloadId: WorkloadId;
    MilestoneNumber: MilestoneNumber;
  }
  export interface GetMilestoneOutput {
    WorkloadId?: WorkloadId;
    Milestone?: Milestone;
  }
  export interface GetWorkloadInput {
    WorkloadId: WorkloadId;
  }
  export interface GetWorkloadOutput {
    Workload?: Workload;
  }
  export type HelpfulResourceUrl = string;
  export interface ImportLensInput {
    LensAlias?: LensAlias;
    /**
     * The JSON representation of a lens.
     */
    JSONString: LensJSON;
    ClientRequestToken: ClientRequestToken;
    /**
     * Tags to associate to a lens.
     */
    Tags?: TagMap;
  }
  export interface ImportLensOutput {
    /**
     * The ARN for the lens.
     */
    LensArn?: LensArn;
    /**
     * The status of the imported lens.
     */
    Status?: ImportLensStatus;
  }
  export type ImportLensStatus = "IN_PROGRESS"|"COMPLETE"|"ERROR"|string;
  export type ImprovementPlanUrl = string;
  export type ImprovementSummaries = ImprovementSummary[];
  export interface ImprovementSummary {
    QuestionId?: QuestionId;
    PillarId?: PillarId;
    QuestionTitle?: QuestionTitle;
    Risk?: Risk;
    ImprovementPlanUrl?: ImprovementPlanUrl;
    /**
     * The improvement plan details.
     */
    ImprovementPlans?: ChoiceImprovementPlans;
  }
  export type IsApplicable = boolean;
  export type IsMajorVersion = boolean;
  export type IsReviewOwnerUpdateAcknowledged = boolean;
  export interface Lens {
    /**
     * The ARN of a lens.
     */
    LensArn?: LensArn;
    /**
     * The version of a lens.
     */
    LensVersion?: LensVersion;
    Name?: LensName;
    Description?: LensDescription;
    /**
     * The Amazon Web Services account ID that owns the lens.
     */
    Owner?: LensOwner;
    /**
     * The ID assigned to the share invitation.
     */
    ShareInvitationId?: ShareInvitationId;
  }
  export type LensAlias = string;
  export type LensAliases = LensAlias[];
  export type LensArn = string;
  export type LensDescription = string;
  export type LensJSON = string;
  export type LensName = string;
  export type LensNamePrefix = string;
  export type LensOwner = string;
  export interface LensReview {
    LensAlias?: LensAlias;
    /**
     * The ARN for the lens.
     */
    LensArn?: LensArn;
    /**
     * The version of the lens.
     */
    LensVersion?: LensVersion;
    LensName?: LensName;
    /**
     * The status of the lens.
     */
    LensStatus?: LensStatus;
    PillarReviewSummaries?: PillarReviewSummaries;
    UpdatedAt?: Timestamp;
    Notes?: Notes;
    RiskCounts?: RiskCounts;
    NextToken?: NextToken;
  }
  export interface LensReviewReport {
    LensAlias?: LensAlias;
    /**
     * The ARN for the lens.
     */
    LensArn?: LensArn;
    Base64String?: Base64String;
  }
  export type LensReviewSummaries = LensReviewSummary[];
  export interface LensReviewSummary {
    LensAlias?: LensAlias;
    /**
     * The ARN for the lens.
     */
    LensArn?: LensArn;
    /**
     * The version of the lens.
     */
    LensVersion?: LensVersion;
    LensName?: LensName;
    /**
     * The status of the lens.
     */
    LensStatus?: LensStatus;
    UpdatedAt?: Timestamp;
    RiskCounts?: RiskCounts;
  }
  export type LensShareSummaries = LensShareSummary[];
  export interface LensShareSummary {
    ShareId?: ShareId;
    SharedWith?: SharedWith;
    Status?: ShareStatus;
  }
  export type LensStatus = "CURRENT"|"NOT_CURRENT"|"DEPRECATED"|"DELETED"|"UNSHARED"|string;
  export type LensStatusType = "ALL"|"DRAFT"|"PUBLISHED"|string;
  export type LensSummaries = LensSummary[];
  export interface LensSummary {
    /**
     * The ARN of the lens.
     */
    LensArn?: LensArn;
    LensAlias?: LensAlias;
    LensName?: LensName;
    /**
     * The type of the lens.
     */
    LensType?: LensType;
    Description?: LensDescription;
    CreatedAt?: Timestamp;
    UpdatedAt?: Timestamp;
    /**
     * The version of the lens.
     */
    LensVersion?: LensVersion;
    Owner?: AwsAccountId;
    /**
     * The status of the lens.
     */
    LensStatus?: LensStatus;
  }
  export type LensType = "AWS_OFFICIAL"|"CUSTOM_SHARED"|"CUSTOM_SELF"|string;
  export interface LensUpgradeSummary {
    WorkloadId?: WorkloadId;
    WorkloadName?: WorkloadName;
    LensAlias?: LensAlias;
    /**
     * The ARN for the lens.
     */
    LensArn?: LensArn;
    /**
     * The current version of the lens.
     */
    CurrentLensVersion?: LensVersion;
    /**
     * The latest version of the lens.
     */
    LatestLensVersion?: LensVersion;
  }
  export type LensVersion = string;
  export interface ListAnswersInput {
    WorkloadId: WorkloadId;
    LensAlias: LensAlias;
    PillarId?: PillarId;
    MilestoneNumber?: MilestoneNumber;
    NextToken?: NextToken;
    /**
     * The maximum number of results to return for this request.
     */
    MaxResults?: ListAnswersMaxResults;
  }
  export type ListAnswersMaxResults = number;
  export interface ListAnswersOutput {
    WorkloadId?: WorkloadId;
    MilestoneNumber?: MilestoneNumber;
    LensAlias?: LensAlias;
    /**
     * The ARN for the lens.
     */
    LensArn?: LensArn;
    AnswerSummaries?: AnswerSummaries;
    NextToken?: NextToken;
  }
  export interface ListLensReviewImprovementsInput {
    WorkloadId: WorkloadId;
    LensAlias: LensAlias;
    PillarId?: PillarId;
    MilestoneNumber?: MilestoneNumber;
    NextToken?: NextToken;
    /**
     * The maximum number of results to return for this request.
     */
    MaxResults?: ListLensReviewImprovementsMaxResults;
  }
  export type ListLensReviewImprovementsMaxResults = number;
  export interface ListLensReviewImprovementsOutput {
    WorkloadId?: WorkloadId;
    MilestoneNumber?: MilestoneNumber;
    LensAlias?: LensAlias;
    /**
     * The ARN for the lens.
     */
    LensArn?: LensArn;
    ImprovementSummaries?: ImprovementSummaries;
    NextToken?: NextToken;
  }
  export interface ListLensReviewsInput {
    WorkloadId: WorkloadId;
    MilestoneNumber?: MilestoneNumber;
    NextToken?: NextToken;
    MaxResults?: MaxResults;
  }
  export interface ListLensReviewsOutput {
    WorkloadId?: WorkloadId;
    MilestoneNumber?: MilestoneNumber;
    LensReviewSummaries?: LensReviewSummaries;
    NextToken?: NextToken;
  }
  export interface ListLensSharesInput {
    LensAlias: LensAlias;
    /**
     * The Amazon Web Services account ID or IAM role with which the lens is shared.
     */
    SharedWithPrefix?: SharedWithPrefix;
    NextToken?: NextToken;
    /**
     * The maximum number of results to return for this request.
     */
    MaxResults?: ListWorkloadSharesMaxResults;
  }
  export interface ListLensSharesOutput {
    /**
     * A list of lens share summaries.
     */
    LensShareSummaries?: LensShareSummaries;
    NextToken?: NextToken;
  }
  export interface ListLensesInput {
    NextToken?: NextToken;
    MaxResults?: MaxResults;
    /**
     * The type of lenses to be returned.
     */
    LensType?: LensType;
    /**
     * The status of lenses to be returned.
     */
    LensStatus?: LensStatusType;
    LensName?: LensName;
  }
  export interface ListLensesOutput {
    LensSummaries?: LensSummaries;
    NextToken?: NextToken;
  }
  export interface ListMilestonesInput {
    WorkloadId: WorkloadId;
    NextToken?: NextToken;
    MaxResults?: MaxResults;
  }
  export interface ListMilestonesOutput {
    WorkloadId?: WorkloadId;
    MilestoneSummaries?: MilestoneSummaries;
    NextToken?: NextToken;
  }
  export interface ListNotificationsInput {
    WorkloadId?: WorkloadId;
    NextToken?: NextToken;
    /**
     * The maximum number of results to return for this request.
     */
    MaxResults?: ListNotificationsMaxResults;
  }
  export type ListNotificationsMaxResults = number;
  export interface ListNotificationsOutput {
    /**
     * List of lens notification summaries in a workload.
     */
    NotificationSummaries?: NotificationSummaries;
    NextToken?: NextToken;
  }
  export interface ListShareInvitationsInput {
    WorkloadNamePrefix?: WorkloadNamePrefix;
    /**
     * An optional string added to the beginning of each lens name returned in the results.
     */
    LensNamePrefix?: LensNamePrefix;
    /**
     * The type of share invitations to be returned.
     */
    ShareResourceType?: ShareResourceType;
    NextToken?: NextToken;
    /**
     * The maximum number of results to return for this request.
     */
    MaxResults?: ListShareInvitationsMaxResults;
  }
  export type ListShareInvitationsMaxResults = number;
  export interface ListShareInvitationsOutput {
    /**
     * List of share invitation summaries in a workload.
     */
    ShareInvitationSummaries?: ShareInvitationSummaries;
    NextToken?: NextToken;
  }
  export interface ListTagsForResourceInput {
    WorkloadArn: WorkloadArn;
  }
  export interface ListTagsForResourceOutput {
    /**
     * The tags for the resource.
     */
    Tags?: TagMap;
  }
  export interface ListWorkloadSharesInput {
    WorkloadId: WorkloadId;
    /**
     * The Amazon Web Services account ID or IAM role with which the workload is shared.
     */
    SharedWithPrefix?: SharedWithPrefix;
    NextToken?: NextToken;
    /**
     * The maximum number of results to return for this request.
     */
    MaxResults?: ListWorkloadSharesMaxResults;
  }
  export type ListWorkloadSharesMaxResults = number;
  export interface ListWorkloadSharesOutput {
    WorkloadId?: WorkloadId;
    WorkloadShareSummaries?: WorkloadShareSummaries;
    NextToken?: NextToken;
  }
  export interface ListWorkloadsInput {
    WorkloadNamePrefix?: WorkloadNamePrefix;
    NextToken?: NextToken;
    /**
     * The maximum number of results to return for this request.
     */
    MaxResults?: ListWorkloadsMaxResults;
  }
  export type ListWorkloadsMaxResults = number;
  export interface ListWorkloadsOutput {
    WorkloadSummaries?: WorkloadSummaries;
    NextToken?: NextToken;
  }
  export type MaxResults = number;
  export interface Milestone {
    MilestoneNumber?: MilestoneNumber;
    MilestoneName?: MilestoneName;
    RecordedAt?: Timestamp;
    Workload?: Workload;
  }
  export type MilestoneName = string;
  export type MilestoneNumber = number;
  export type MilestoneSummaries = MilestoneSummary[];
  export interface MilestoneSummary {
    MilestoneNumber?: MilestoneNumber;
    MilestoneName?: MilestoneName;
    RecordedAt?: Timestamp;
    WorkloadSummary?: WorkloadSummary;
  }
  export type NextToken = string;
  export type Notes = string;
  export type NotificationSummaries = NotificationSummary[];
  export interface NotificationSummary {
    /**
     * The type of notification.
     */
    Type?: NotificationType;
    /**
     * Summary of lens upgrade.
     */
    LensUpgradeSummary?: LensUpgradeSummary;
  }
  export type NotificationType = "LENS_VERSION_UPGRADED"|"LENS_VERSION_DEPRECATED"|string;
  export type PermissionType = "READONLY"|"CONTRIBUTOR"|string;
  export interface PillarDifference {
    PillarId?: PillarId;
    PillarName?: PillarName;
    /**
     * Indicates the type of change to the pillar.
     */
    DifferenceStatus?: DifferenceStatus;
    /**
     * List of question differences.
     */
    QuestionDifferences?: QuestionDifferences;
  }
  export type PillarDifferences = PillarDifference[];
  export type PillarId = string;
  export type PillarName = string;
  export type PillarNotes = {[key: string]: Notes};
  export type PillarReviewSummaries = PillarReviewSummary[];
  export interface PillarReviewSummary {
    PillarId?: PillarId;
    PillarName?: PillarName;
    Notes?: Notes;
    RiskCounts?: RiskCounts;
  }
  export type QuestionDescription = string;
  export interface QuestionDifference {
    QuestionId?: QuestionId;
    QuestionTitle?: QuestionTitle;
    /**
     * Indicates the type of change to the question.
     */
    DifferenceStatus?: DifferenceStatus;
  }
  export type QuestionDifferences = QuestionDifference[];
  export type QuestionId = string;
  export type QuestionTitle = string;
  export type Risk = "UNANSWERED"|"HIGH"|"MEDIUM"|"NONE"|"NOT_APPLICABLE"|string;
  export type RiskCounts = {[key: string]: Count};
  export type SelectedChoices = ChoiceId[];
  export type ShareId = string;
  export interface ShareInvitation {
    /**
     * The ID assigned to the share invitation.
     */
    ShareInvitationId?: ShareInvitationId;
    /**
     * The resource type of the share invitation.
     */
    ShareResourceType?: ShareResourceType;
    WorkloadId?: WorkloadId;
    LensAlias?: LensAlias;
    /**
     * The ARN for the lens.
     */
    LensArn?: LensArn;
  }
  export type ShareInvitationAction = "ACCEPT"|"REJECT"|string;
  export type ShareInvitationId = string;
  export type ShareInvitationSummaries = ShareInvitationSummary[];
  export interface ShareInvitationSummary {
    /**
     * The ID assigned to the share invitation.
     */
    ShareInvitationId?: ShareInvitationId;
    SharedBy?: AwsAccountId;
    SharedWith?: SharedWith;
    PermissionType?: PermissionType;
    /**
     * The resource type of the share invitation.
     */
    ShareResourceType?: ShareResourceType;
    WorkloadName?: WorkloadName;
    WorkloadId?: WorkloadId;
    LensName?: LensName;
    /**
     * The ARN for the lens.
     */
    LensArn?: LensArn;
  }
  export type ShareResourceType = "WORKLOAD"|"LENS"|string;
  export type ShareStatus = "ACCEPTED"|"REJECTED"|"PENDING"|"REVOKED"|"EXPIRED"|string;
  export type SharedWith = string;
  export type SharedWithPrefix = string;
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagMap = {[key: string]: TagValue};
  export interface TagResourceInput {
    WorkloadArn: WorkloadArn;
    /**
     * The tags for the resource.
     */
    Tags: TagMap;
  }
  export interface TagResourceOutput {
  }
  export type TagValue = string;
  export type Timestamp = Date;
  export interface UntagResourceInput {
    WorkloadArn: WorkloadArn;
    /**
     * A list of tag keys. Existing tags of the resource whose keys are members of this list are removed from the resource.
     */
    TagKeys: TagKeyList;
  }
  export interface UntagResourceOutput {
  }
  export interface UpdateAnswerInput {
    WorkloadId: WorkloadId;
    LensAlias: LensAlias;
    QuestionId: QuestionId;
    SelectedChoices?: SelectedChoices;
    /**
     * A list of choices to update on a question in your workload. The String key corresponds to the choice ID to be updated.
     */
    ChoiceUpdates?: ChoiceUpdates;
    Notes?: Notes;
    IsApplicable?: IsApplicable;
    /**
     * The reason why a question is not applicable to your workload.
     */
    Reason?: AnswerReason;
  }
  export interface UpdateAnswerOutput {
    WorkloadId?: WorkloadId;
    LensAlias?: LensAlias;
    /**
     * The ARN for the lens.
     */
    LensArn?: LensArn;
    Answer?: Answer;
  }
  export interface UpdateLensReviewInput {
    WorkloadId: WorkloadId;
    LensAlias: LensAlias;
    LensNotes?: Notes;
    PillarNotes?: PillarNotes;
  }
  export interface UpdateLensReviewOutput {
    WorkloadId?: WorkloadId;
    LensReview?: LensReview;
  }
  export interface UpdateShareInvitationInput {
    /**
     * The ID assigned to the share invitation.
     */
    ShareInvitationId: ShareInvitationId;
    ShareInvitationAction: ShareInvitationAction;
  }
  export interface UpdateShareInvitationOutput {
    /**
     * The updated workload share invitation.
     */
    ShareInvitation?: ShareInvitation;
  }
  export interface UpdateWorkloadInput {
    WorkloadId: WorkloadId;
    WorkloadName?: WorkloadName;
    Description?: WorkloadDescription;
    Environment?: WorkloadEnvironment;
    AccountIds?: WorkloadAccountIds;
    AwsRegions?: WorkloadAwsRegions;
    NonAwsRegions?: WorkloadNonAwsRegions;
    PillarPriorities?: WorkloadPillarPriorities;
    ArchitecturalDesign?: WorkloadArchitecturalDesign;
    ReviewOwner?: WorkloadReviewOwner;
    /**
     * Flag indicating whether the workload owner has acknowledged that the Review owner field is required. If a Review owner is not added to the workload within 60 days of acknowledgement, access to the workload is restricted until an owner is added.
     */
    IsReviewOwnerUpdateAcknowledged?: IsReviewOwnerUpdateAcknowledged;
    IndustryType?: WorkloadIndustryType;
    Industry?: WorkloadIndustry;
    Notes?: Notes;
    ImprovementStatus?: WorkloadImprovementStatus;
  }
  export interface UpdateWorkloadOutput {
    Workload?: Workload;
  }
  export interface UpdateWorkloadShareInput {
    ShareId: ShareId;
    WorkloadId: WorkloadId;
    PermissionType: PermissionType;
  }
  export interface UpdateWorkloadShareOutput {
    WorkloadId?: WorkloadId;
    WorkloadShare?: WorkloadShare;
  }
  export interface UpgradeLensReviewInput {
    WorkloadId: WorkloadId;
    LensAlias: LensAlias;
    MilestoneName: MilestoneName;
    ClientRequestToken?: ClientRequestToken;
  }
  export interface VersionDifferences {
    /**
     * The differences between the base and latest versions of the lens.
     */
    PillarDifferences?: PillarDifferences;
  }
  export interface Workload {
    WorkloadId?: WorkloadId;
    WorkloadArn?: WorkloadArn;
    WorkloadName?: WorkloadName;
    Description?: WorkloadDescription;
    Environment?: WorkloadEnvironment;
    UpdatedAt?: Timestamp;
    AccountIds?: WorkloadAccountIds;
    AwsRegions?: WorkloadAwsRegions;
    NonAwsRegions?: WorkloadNonAwsRegions;
    ArchitecturalDesign?: WorkloadArchitecturalDesign;
    ReviewOwner?: WorkloadReviewOwner;
    ReviewRestrictionDate?: Timestamp;
    /**
     * Flag indicating whether the workload owner has acknowledged that the Review owner field is required. If a Review owner is not added to the workload within 60 days of acknowledgement, access to the workload is restricted until an owner is added.
     */
    IsReviewOwnerUpdateAcknowledged?: IsReviewOwnerUpdateAcknowledged;
    IndustryType?: WorkloadIndustryType;
    Industry?: WorkloadIndustry;
    Notes?: Notes;
    ImprovementStatus?: WorkloadImprovementStatus;
    RiskCounts?: RiskCounts;
    PillarPriorities?: WorkloadPillarPriorities;
    Lenses?: WorkloadLenses;
    Owner?: AwsAccountId;
    /**
     * The ID assigned to the share invitation.
     */
    ShareInvitationId?: ShareInvitationId;
    /**
     * The tags associated with the workload.
     */
    Tags?: TagMap;
  }
  export type WorkloadAccountIds = AwsAccountId[];
  export type WorkloadArchitecturalDesign = string;
  export type WorkloadArn = string;
  export type WorkloadAwsRegions = AwsRegion[];
  export type WorkloadDescription = string;
  export type WorkloadEnvironment = "PRODUCTION"|"PREPRODUCTION"|string;
  export type WorkloadId = string;
  export type WorkloadImprovementStatus = "NOT_APPLICABLE"|"NOT_STARTED"|"IN_PROGRESS"|"COMPLETE"|"RISK_ACKNOWLEDGED"|string;
  export type WorkloadIndustry = string;
  export type WorkloadIndustryType = string;
  export type WorkloadLenses = LensAlias[];
  export type WorkloadName = string;
  export type WorkloadNamePrefix = string;
  export type WorkloadNonAwsRegion = string;
  export type WorkloadNonAwsRegions = WorkloadNonAwsRegion[];
  export type WorkloadPillarPriorities = PillarId[];
  export type WorkloadReviewOwner = string;
  export interface WorkloadShare {
    ShareId?: ShareId;
    SharedBy?: AwsAccountId;
    SharedWith?: SharedWith;
    PermissionType?: PermissionType;
    Status?: ShareStatus;
    WorkloadName?: WorkloadName;
    WorkloadId?: WorkloadId;
  }
  export type WorkloadShareSummaries = WorkloadShareSummary[];
  export interface WorkloadShareSummary {
    ShareId?: ShareId;
    SharedWith?: SharedWith;
    PermissionType?: PermissionType;
    Status?: ShareStatus;
  }
  export type WorkloadSummaries = WorkloadSummary[];
  export interface WorkloadSummary {
    WorkloadId?: WorkloadId;
    WorkloadArn?: WorkloadArn;
    WorkloadName?: WorkloadName;
    Owner?: AwsAccountId;
    UpdatedAt?: Timestamp;
    Lenses?: WorkloadLenses;
    RiskCounts?: RiskCounts;
    ImprovementStatus?: WorkloadImprovementStatus;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2020-03-31"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the WellArchitected client.
   */
  export import Types = WellArchitected;
}
export = WellArchitected;
